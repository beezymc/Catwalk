import React, { useEffect } from 'react';
import RelatedItemsWrapper from './related_items/RelatedItemsWrapper.jsx';
import QAWrapper from './questions_answers/QAWrapper.jsx';
import ProductOverview from './product_overview/Product.jsx';
import {
  useParams,
} from 'react-router-dom';

const App = (props) => {
  let { productId } = useParams();
  useEffect(() => {
    props.handleProductInit(productId);
  }, []);

  return (
    <div>
      <ProductOverview />
      <QAWrapper />
      {/* <RelatedItemsWrapper
        relatedItemsList={props.relatedItemsList}
        currentProduct={props.currentProduct}
        relatedItemsReviews={props.relatedItemsReviews}
      /> */}
    </div>
  );
};

export default App;
