const setError = (error) => {
  return ({
    //TODO:  Return some action object to change the currently playing video.
    type: 'SET_ERROR',
    error: error
  });
};

export default setError;