import { combineReducers } from 'redux';
import currentProduct from './currentProduct.js';
import relatedItemsList from './relatedItemsList.js';
import relatedItemsReviews from './relatedItemsReviews.js';
import relatedStyles from './relatedStyles.js';

var rootReducer = combineReducers({ currentProduct, relatedItemsList, relatedItemsReviews, relatedStyles });

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
