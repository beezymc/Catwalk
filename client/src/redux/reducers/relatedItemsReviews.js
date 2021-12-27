const relatedItemsReviewsReducer = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_RELATED_ITEMS_REVIEWS':
    return state = action.relatedItemsReviews;
  default:
    return state;
  }
};

export default relatedItemsReviewsReducer;