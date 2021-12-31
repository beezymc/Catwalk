const currentProductStylesReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CHANGE_PRODUCT_STYLES':
    if (action.currentProductStyles) {
      return state = action.currentProductStyles;
    } else {
      return state;
    }
  default:
    return state;
  }
};

export default currentProductStylesReducer;
