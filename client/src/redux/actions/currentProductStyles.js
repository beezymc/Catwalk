const changeCurrentProductStyles = (currentProductStyles) => {
  return ({
    //TODO:  Return some action object to change the currently playing video.
    type: 'CHANGE_PRODUCT_STYLES',
    currentProductStyles: currentProductStyles
  });
};

export default changeCurrentProductStyles;