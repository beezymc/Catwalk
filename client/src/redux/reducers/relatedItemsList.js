import Redux from 'redux';

var relatedItemsListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
  case 'CHANGE_RELATED_ITEMS_LIST':
    return state = action.relatedItemsList;
  default:
    return state;
  }
};

export default relatedItemsListReducer;
