const errorReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_ERROR':
    if (action.error) {
      return state = action.error;
    } else {
      return state;
    }
  default:
    return state;
  }
};

export default errorReducer;
