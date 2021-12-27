const relatedItemsListReducer = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_RELATED_ITEMS_LIST':
    return state = action.relatedItemsList;
  default:
    return state;
  }
};

export default relatedItemsListReducer;
