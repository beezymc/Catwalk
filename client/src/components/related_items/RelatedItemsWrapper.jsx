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
      <RelatedItemCarousel relatedItemsList={props.relatedItemsList} currentProduct={props.currentProduct} />
    </div>
  );
};

export default RelatedItemsWrapper;