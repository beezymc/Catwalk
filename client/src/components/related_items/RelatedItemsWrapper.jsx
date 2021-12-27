import React from 'react';
import RelatedItemCarousel from './RelatedItemCarousel.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';

const RelatedItemsWrapper = (props) => {


  if (props.currentProduct === {} || props.relatedItemsList === []) {
    return (
      <div>
        Loading.
      </div>
    );
  }
  return (
    <div>
      <RelatedItemCarousel
        relatedItemsList={props.relatedItemsList}
        currentProduct={props.currentProduct}
        relatedItemsReviews={props.relatedItemsReviews}
        relatedStyles={props.relatedStyles}
      />
    </div>
  );
};

export default RelatedItemsWrapper;