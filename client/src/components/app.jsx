import React, { useEffect } from 'react';
import RelatedItemsWrapper from './related_items/RelatedItemsWrapper.jsx';
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
      {/* <RelatedItemsWrapper
        relatedItemsList={props.relatedItemsList}
        currentProduct={props.currentProduct}
        relatedItemsReviews={props.relatedItemsReviews}
<<<<<<< HEAD
      /> */}
=======
        relatedStyles={props.relatedStyles}
        handleProductInit={props.handleProductInit}
      />
>>>>>>> bda503217c6020740d93533c465627272ac9f36d
    </div>
  );
};

export default App;
