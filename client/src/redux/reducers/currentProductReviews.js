const currentProductReviewsReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CHANGE_PRODUCT_REVIEWS':
    if (action.currentProductReviews) {
      return state = action.currentProductReviews;
    } else {
      return state;
    }
  default:
    return state;
  }
};

export default currentProductReviewsReducer;
