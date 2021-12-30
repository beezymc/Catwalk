import React from 'react';
import RelatedItemCarousel from './RelatedItemCarousel.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';
import styles from './relateditems.module.css';

const RelatedItemsWrapper = (props) => {
  if (props.currentProduct === {}) {
    return (
      <div>
        Loading.
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <RelatedItemCarousel
        currentProduct={props.currentProduct}
        handleProductInit={props.handleProductInit}
      />
      <OutfitCarousel
        currentProduct={props.currentProduct}
        currentProductStyles={props.currentProductStyles}
        currentProductStyles={props.currentProductReviews}
      />
    </div>
  );
};

export default RelatedItemsWrapper;