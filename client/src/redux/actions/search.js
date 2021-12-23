import searchYouTube from '../lib/searchYouTube.js';
import changeRelatedItemsList from './relatedItemsList.js';
import changeProduct from './currentProduct.js';
import store from '../store/store.js';
import axios from axios;

var handleVideoSearch = (q) => {
  return (dispatch) => {
    axios.get(/)
    // searchYouTube({
    //   key: YOUTUBE_API_KEY,
    //   query: q
    // }, function(videos) {
    //   store.dispatch(changeVideoList(videos));
    //   store.dispatch(changeVideo(videos[0]));
    // });
  };
  // TODO:  Write an asynchronous action to handle a video search!
};

// export default handleVideoSearch;
