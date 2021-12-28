const axios = require('axios');
const config = require('../../config.js');

//'User-Agent': 'request', maybe use this header

const headers = { Authorization: `${config}` };
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

module.exports = {
  // product requests
  // pass in params obj with product id you want
  getProducts: (product_id, type) => {
    if (product_id === undefined) {
      // axios call to api with no specific id will return all products from one page (can increase page size)
      return axios.get(`${url}/products`, { headers })
    }
    if (type === 'related') {
      return axios.get(`${url}/products/${product_id}/related`, {headers});
    }
    if (type === 'styles') {
      return axios.get(`${url}/products/${product_id}/styles`, {headers});
    }
    return axios.get(`${url}/products/${product_id}`, {headers})
  },

  // cart requests
  getCart: () => {
    return axios.get(`${url}/cart`, { headers })
  },
  // params sku_id
  addCart: (sku_id) => {
    return axios.post(`${url}/cart`, { product_id: sku_id }, { headers })
  },
  // interaction requests
  // params element, widget, time
  addInteractions: (params) => {
    return axios.post(`${url}/interactions`, { element: params.element, widget: params.widget, time: params.time }, { headers })
  },

  // Questions/Answer requests
  // params question_id

  getQuestionsByProductId: (product_id) => {
    return axios.get(`${url}/qa/questions?product_id=${product_id}`, { headers })
  },





  createAnswer: (answerData, question_id) => {
    const options = {
      method: 'post',
      url: `${url}/qa/questions/${question_id}/answers`,
      data: answerData,
      headers: headers
      };
    console.log("answerData:", answerData, " question_id:", question_id);
    return axios(options)
  },








  getQuestion: (question_id) => {
    return axios.get(`${url}/questions/?question_id=${question_id}`, { headers })
  },
  getAnswer: (question_id) => {
    return axios.get(`${url}/questions/?question_id=${question_id}/answers`, { headers })
  },
  updateQuestion: (question_id) => {
    return axios.patch(`${url}/questions/?question_id=${question_id}/helpful`, { headers })
  },
  reportQuestion: (question_id) => {
    return axios.patch(`${url}/questions/?question_id=${question_id}/report`, { headers })
  },

  // review requests
  //params include page, product_id, sort (based on newest, helpful, relevant), count(display how many per page)
  getReviews: (product_id) => {
    return axios.get(`${url}/reviews/?product_id=${product_id}`, { headers })
  },
  //params product id
  getMeta: (product_id) => {
    return axios.get(`${url}/reviews/meta/?product_id=${product_id}`, { headers })
  },
  // params product_id, body(msg), rating, summary, name, reccommend
  addReview: (params) => {
    return axios.post(`${url}/reviews`, { product_id: params.product_id, body: params.body, rating: params.rating, summary: params.summary, name: params.name, recommend: params.recommend }, { headers })
  },
  //params review id
  updateReview: (review_id) => {
    return axios.patch(`${url}/reviews/?review_id=${review_id}/helpful`, { headers })
  },
  reportReview: (review_id) => {
    return axios.patch(`${url}/reviews/?review_id=${review_id}/report`, { headers })
  }
};