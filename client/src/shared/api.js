import axios from 'axios';

export const getProducts = (productId) => {
  let params = {'product_id': productId};
  return axios.get()
};

