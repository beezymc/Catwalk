import React, { useEffect, useState } from 'react';
import RelatedItemsWrapper from './related_items/RelatedItemsWrapper.jsx';
import ProductOverview from './product_overview/Product.jsx';
import {
  useParams,
} from 'react-router-dom';
import styles from './app.module.css';

const App = (props) => {
  const [error, setError] = useState(false);
  let { productId } = useParams();
  useEffect(() => {
    props.handleProductInit(productId)
      .then(() => {
        if (props.error !== '') {
          setError(true);
          console.log(props.error);
        }
      });
  }, []);

  if (error) {
    return (
      <div className={styles.app}>
        404
      </div>
    );
  }
  return (
    <div className={styles.app}>
      <ProductOverview />
      <br></br>
      <RelatedItemsWrapper
        currentProductStyles={props.currentProductStyles}
        currentProduct={props.currentProduct}
        currentProductReviews={props.currentProductReviews}
        handleProductInit={props.handleProductInit}
      />
    </div>
  );
};

export default App;
