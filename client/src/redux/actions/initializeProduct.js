import changeCurrentProductReviews from './currentProductReviews.js';
import changeCurrentProductStyles from './currentProductStyles.js';
import changeProduct from './currentProduct.js';
import setError from './currentError';
import store from '../store/store.js';
import axios from 'axios';

var handleProductInit = (productId) => {
  return (dispatch) => {
    return axios.get(`/api/products/?product_id=${productId}`)
      .then((product) => {
        store.dispatch(changeProduct(product.data));
        axios.get(`/api/products/?product_id=${productId}&type=styles`)
          .then((productStyles) => {
            store.dispatch(changeCurrentProductStyles(productStyles.data));
            axios.get(`/api/reviews/meta/?product_id=${productId}`)
              .then((productReviews) => {
                store.dispatch(changeCurrentProductReviews(productReviews.data));
              })
              .catch((error) => {
                store.dispatch(setError(error));
              });
          })
          .catch((error) => {
            store.dispatch(setError(error));
          });
      })
      .catch((error) => {
        store.dispatch(setError(error));
      });
  };
};

export default handleProductInit;
