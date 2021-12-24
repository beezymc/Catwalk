import changeRelatedItemsList from './relatedItemsList.js';
import changeProduct from './currentProduct.js';
import store from '../store/store.js';
import axios from 'axios';

var handleProductInit = () => {
  return (dispatch) => {
    const config = {
      headers: {
        Authorization: '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'
      }
    }
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/63615', config)
      .then((product) => {
        store.dispatch(changeProduct(product.data));
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/63615/related', config)
          .then((related) => {
            console.log(related);
            store.dispatch(changeRelatedItemsList(related.data));
          })
      })

    // searchYouTube({
    // key: YOUTUBE_API_KEY,
    // }, function(videos) {
    //   store.dispatch(changeVideoList(videos));
    //   store.dispatch(changeVideo(videos[0]));
    // });
  };
};

export default handleProductInit;
