const axios = require('axios');
const config = require('../../config.js');

//'User-Agent': 'request', maybe use this header
const headers = { Authorization: `${config.token}`};
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

module.exports = {
  // product requests
  // pass in params obj with product id you want
  getProducts: (params) => {
    if (params.product_id === undefined) {
      // axios call to api with no specific id will return all products from one page (can increase page size)
      return axios.get(`${url}/products`, {headers})
    }
    return axios.get(`${url}/products/${params.product_id}`, {headers, params: params})
  },

  // cart requests
  getCart: () => {
    return axios.get(`${url}/cart`, {headers})
  },
  addCart: () => {
    return axios.post(`${url}/cart`, {headers})
  },
  // interaction requests
  addInteractions: () => {
    return axios.post(`${url}/interactions`, {headers})
  },

  // Questions/Answer requests
  // params product_id
  getQA: (params) => {
    return axios.get(`${url}/questions/${params.question_id}`, {headers, params: parmas})
  },
  getAnswer: (params) => {
    return axios.get(`${url}/questions/${params.question_id}/answers`, {headers, params: parmas})
  },
  updateQuestion: (params) => {
    return axios.patch(`${url}/questions/${params.question_id}/helpful`, {headers, params: parmas})
  },
  reportQuestion: (params) => {
    return axios.patch(`${url}/questions/${params.question_id}/report`, {headers, params: parmas})
  },

  // review requests
  //params include page, product_id, sort (based on newest, helpful, relevant), count(display how many per page)
  getReviews: (params) => {
    return axios.get(`${url}/reviews/${params.product_id}`, {headers, params: params})
  },
  //params product id
  getMeta: (params) => {
    return axios.get(`${url}/reviews/meta/${params.product_id}`, {headers, params: params})
  },
  addReview: () => {
    return axios.post(`${url}/reviews`, {headers})
  },
  //params review id
  updateReview: (params) => {
    return axios.patch(`${url}/reviews/${params.review_id}/helpful`, {headers, params: params})
  },
  reportReview: (params) => {
    return axios.patch(`${url}/reviews/${params.review_id}/report`, {headers, params: params})
  }
};