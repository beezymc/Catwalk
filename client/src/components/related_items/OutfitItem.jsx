import React, { useState } from 'react';
import styles from './relateditems.module.css';
import StarRating from './StarRating.jsx';

const OutfitItem = (props) => {
  const [photo, setPhoto] = useState('test');
  const [category, setCategory] = useState(props.currentProduct.category);
  const [rating, setRating] = useState(3.50);
  const [name, setName] = useState(props.currentProduct.name);
  const [price, setPrice] = useState(100.00);
  const [id, setId] = useState(props.currentProduct.id);
  return (
    <div>
      <div className={styles.cornerSymbol} onClick={ () => { props.removeItem(id); } }>
        X
      </div>
      <div className={styles.innerCard}>
        <div className={styles.imageContainer}>
          {photo}
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