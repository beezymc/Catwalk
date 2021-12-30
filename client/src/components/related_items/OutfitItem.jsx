import React, { useState, useEffect } from 'react';
import styles from './relateditems.module.css';
import StarRating from './StarRating.jsx';

const OutfitItem = (props) => {
  const [photo, setPhoto] = useState('test');
  const [category, setCategory] = useState(props.currentProduct.category);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState(props.currentProduct.name);
  const [price, setPrice] = useState(100.00);
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
    setPrice(currentProductStyles.sale_price ? currentProductStyles.sale_price : currentProductStyles.original_price);
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
        <div>
          {category}
        </div>
        <div>
          {name}
        </div>
        <div>
          {price}
        </div>
        <div>
          {rating ? <StarRating rating={rating} /> : ''}
        </div>
      </div>
    </div>
  );
};

export default OutfitItem;