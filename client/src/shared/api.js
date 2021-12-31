import axios from 'axios';

export const addCart = (sku_id, count) => {
  axios.post('/api/cart', {
    sku_id: sku_id,
    count: count
  })
    .then(() => {
      console.log('added product to cart')
    })
    .catch((err) => {
      console.log('Error occurred', err)
    })
};

