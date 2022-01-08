import changeCurrentProductReviews from './currentProductReviews.js';
import changeCurrentProductStyles from './currentProductStyles.js';
import changeProduct from './currentProduct.js';
import changeStyle from './currentStyle.js';
import setError from './currentError';
import store from '../store/store.js';
import axios from 'axios';

var handleProductInit = (productId) => {
  return (dispatch) => {
    return axios.get(`/api/product/init/?product_id=${productId}`)
      .then((product) => {
        store.dispatch(changeProduct(product.data.productData));
        store.dispatch(changeCurrentProductStyles(product.data.stylesData));
        store.dispatch(changeStyle(product.data.stylesData[0]));
        store.dispatch(changeCurrentProductReviews(product.data.reviewsData));
      })
      .catch((error) => {
        store.dispatch(setError(error));
      });
  };
};

export default handleProductInit;
