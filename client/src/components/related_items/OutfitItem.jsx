import React, { useState, useEffect } from 'react';
import styles from './relateditems.module.css';
import StarRating from './StarRating.jsx';
import { getAverageRating } from './utils.js';

const OutfitItem = (props) => {
  const [photo, setPhoto] = useState('');
  const [category, setCategory] = useState(props.currentProduct.category);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState(props.currentProduct.name);
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(props.currentStyle.style_id);

  useEffect(() => {
    const currentProductRatings = props.currentProductReviews.ratings;
    setRating(getAverageRating(currentProductRatings));
    setPhoto(props.currentStyle.photos[0].thumbnail_url || 'https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1');
    setPrice(props.currentStyle.sale_price ? [props.currentStyle.sale_price, props.currentStyle.original_price] : props.currentStyle.original_price);
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