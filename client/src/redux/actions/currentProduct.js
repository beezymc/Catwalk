const changeProduct = (product) => {
  return ({
    //TODO:  Return some action object to change the currently playing video.
    type: 'CHANGE_PRODUCT',
    product: product
  });
};

export default changeProduct;
