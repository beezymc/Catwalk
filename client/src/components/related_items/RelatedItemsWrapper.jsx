import React from 'react';
import RelatedItemCarousel from './RelatedItemCarousel.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';
import styles from './relateditems.module.css';

const RelatedItemsWrapper = (props) => {
  if (Object.keys(props.currentProduct).length === 0) {
    return (
      <div className={styles.wrapper}>
        <img src='https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'></img>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <RelatedItemCarousel
          currentProduct={props.currentProduct}
          handleProductInit={props.handleProductInit}
        />
        <OutfitCarousel
          currentProduct={props.currentProduct}
          currentProductStyles={props.currentProductStyles}
          currentProductReviews={props.currentProductReviews}
        />
      </div>
    );
  }
};

export default RelatedItemsWrapper;