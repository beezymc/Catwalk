import { combineReducers } from 'redux';
import currentProduct from './currentProduct.js';
import currentProductStyles from './currentProductStyles.js';
import currentProductReviews from './currentProductReviews.js';
import error from './error.js';

var rootReducer = combineReducers({ currentProduct, currentProductStyles, currentProductReviews, error });

export default rootReducer;
