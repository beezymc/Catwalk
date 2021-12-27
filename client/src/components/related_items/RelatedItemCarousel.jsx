import React from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx';

const RelatedItemCarousel = (props) => {
  let relatedItemDivs;
  if (props.relatedItemsList && props.relatedStyles && props.relatedItemsReviews) {
    relatedItemDivs = props.relatedItemsList.map((relatedItem, index) => {
      return (
        <RelatedItem
          key={index}
          relatedItem={relatedItem}
          currentProduct={props.currentProduct}
          relatedStyle={props.relatedStyles[index]}
          relatedItemReview={props.relatedItemsReviews[index]}
        />
      );
    });
  }

  if (relatedItemDivs) {
    return (
      <div>
        {relatedItemDivs}
      </div>
    );
  }
  return (
    <div>
      Loading.
    </div>
  );
};

export default RelatedItemCarousel;