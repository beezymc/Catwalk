import axios from 'axios';

export const getProducts = (productId) => {
  let param = {'product_id': productId};
  return axios.get('/api/products', {params: param});
};

