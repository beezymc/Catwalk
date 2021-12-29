const relatedStylesReducer = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_RELATED_STYLES_LIST':
    return state = action.relatedStyles;
  default:
    return state;
  }
};

export default relatedStylesReducer;