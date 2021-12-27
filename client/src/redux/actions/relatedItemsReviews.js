const changeRelatedItemsReviews = (relatedItemsReviews) => {
  return ({
    //TODO:  Return some action object to change the currently playing video.
    type: 'CHANGE_RELATED_ITEMS_REVIEWS',
    relatedItemsReviews: relatedItemsReviews
  });
};

export default changeRelatedItemsReviews;