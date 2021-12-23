import Redux from 'redux';

var currentProductReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_PRODUCT':
    if (action.product) {
      return state = action.product;
    } else {
      return state;
    }
  default:
    return state;
  }
};

export default currentProductReducer;
