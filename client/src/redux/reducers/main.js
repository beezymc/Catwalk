import { combineReducers } from 'redux';
import currentProduct from './currentProduct.js';
import currentProductStyles from './currentProductStyles.js';
import currentProductReviews from './currentProductReviews.js';
import error from './error.js';
import currentStyle from './currentStyle.js';

var rootReducer = combineReducers({ currentProduct, currentProductStyles, currentProductReviews, error, currentStyle });

export default rootReducer;
