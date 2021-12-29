import React, { useEffect } from 'react';
import RelatedItemsWrapper from './related_items/RelatedItemsWrapper.jsx';
import {
  useParams,
} from 'react-router-dom';
import styles from './app.module.css';

const App = (props) => {
  let { productId } = useParams();
  useEffect(() => {
    props.handleProductInit(productId);
  }, []);

  return (
    <div className={styles.app}>
      <RelatedItemsWrapper
        relatedItemsList={props.relatedItemsList}
        currentProduct={props.currentProduct}
        relatedItemsReviews={props.relatedItemsReviews}
        relatedStyles={props.relatedStyles}
        handleProductInit={props.handleProductInit}
      />
    </div>
  );
};

export default App;
