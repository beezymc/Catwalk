import React from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx';

const RelatedItemCarousel = (props) => {
  let relatedItemDivs;
  if (props.relatedItemsList) {
    relatedItemDivs = props.relatedItemsList.map((relatedItem, index) => {
      return <RelatedItem key={index} relatedItem={relatedItem} currentProduct={props.currentProduct}/>;
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