import changeRelatedItemsList from './relatedItemsList.js';
import changeRelatedItemsReviews from './relatedItemsReviews.js';
import changeRelatedStyles from './relatedStyles.js';
import changeProduct from './currentProduct.js';
import store from '../store/store.js';
import axios from 'axios';

var handleProductInit = (productId) => {
  return (dispatch) => {
    return axios.get(`/api/products/?product_id=${productId}`)
      .then((product) => {
        store.dispatch(changeProduct(product.data));
        axios.get(`/api/products/?product_id=${productId}&type=related`)
          .then((related) => {
            let relatedItemsPromises = [];
            let relatedReviewsPromises = [];
            let relatedStylesPromises = [];
            for (let i = 0; i < related.data.length; i++) {
              relatedItemsPromises.push(axios.get(`/api/products/?product_id=${related.data[i]}`));
              relatedReviewsPromises.push(axios.get(`/api/reviews/meta/?product_id=${related.data[i]}`));
              relatedStylesPromises.push(axios.get(`/api/products/?product_id=${related.data[i]}&type=styles`));
            }
            Promise.all(relatedItemsPromises)
              .then((relatedItems) => {
                store.dispatch(changeRelatedItemsList(relatedItems));
              });
            Promise.all(relatedReviewsPromises)
              .then((relatedReviews) => {
                store.dispatch(changeRelatedItemsReviews(relatedReviews));
              });
            Promise.all(relatedStylesPromises)
              .then((relatedStyles) => {
                store.dispatch(changeRelatedStyles(relatedStyles));
              });
          });
      });
  };
};

export default handleProductInit;
