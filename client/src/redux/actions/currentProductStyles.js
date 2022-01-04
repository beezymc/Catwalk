const changeCurrentProductStyles = (currentProductStyles) => {
  return ({
    type: 'CHANGE_PRODUCT_STYLES',
    currentProductStyles: currentProductStyles
  });
};

export default changeCurrentProductStyles;