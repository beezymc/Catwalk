import React from 'react';
import RelatedItemCarousel from './RelatedItemCarousel.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';
import styles from './relateditems.module.css';

const RelatedItemsWrapper = (props) => {
  if (props.currentProduct === {} || props.relatedItemsList === []) {
    return (
      <div>
        Loading.
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <RelatedItemCarousel
        relatedItemsList={props.relatedItemsList}
        currentProduct={props.currentProduct}
        relatedItemsReviews={props.relatedItemsReviews}
        relatedStyles={props.relatedStyles}
        handleProductInit={props.handleProductInit}
      />
      <OutfitCarousel
        currentProduct={props.currentProduct}
      />
    </div>
  );
};

export default RelatedItemsWrapper;