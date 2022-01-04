import React, { useState, useEffect } from 'react';
import styles from './relateditems.module.css';
import StarRating from './StarRating.jsx';

const OutfitItem = (props) => {
  const [photo, setPhoto] = useState('');
  const [category, setCategory] = useState(props.currentProduct.category);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState(props.currentProduct.name);
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(props.currentProduct.id);

  useEffect(() => {
    const currentProductStyles = props.currentProductStyles.results[0];
    const currentProductRatings = props.currentProductReviews.ratings;
    let denominator = 0;
    let numerator = 0;
    for (let key in currentProductRatings) {
      let intKey = parseInt(key);
      let intVal = parseInt(currentProductRatings[key]);
      numerator += intVal * intKey;
      denominator += intVal;
    }
    if (numerator) {
      setRating((Math.round((numerator / denominator) * 4) / 4).toFixed(2));
    }
    setPhoto(currentProductStyles.photos[0].thumbnail_url);
    setPrice(currentProductStyles.sale_price ? [currentProductStyles.sale_price, currentProductStyles.original_price] : currentProductStyles.original_price);
  }, []);

  return (
    <div>
      <div className={styles.cornerSymbol} onClick={ () => { props.removeItem(id); } }>
        X
      </div>
      <div className={styles.innerCard}>
        <div className={styles.imageContainer}>
          <img src={photo}></img>
        </div>
        <div className={styles.category}>
          {category}
        </div>
        <div className={styles.name}>
          {name}
        </div>
        {price.length === 2 ?
          <div className={styles.price}>
            <div className={styles.salePrice}>
              {price[0]}
            </div>
            <div className={styles.originalPrice}>
              {price[1]}
            </div>
          </div>
          : <div className={styles.price}>
            {price}
          </div>}
        <div className={styles.reviewStars}>
          {rating ? <StarRating rating={rating} /> : ''}
        </div>
      </div>
    </div>
  );
};

export default OutfitItem;