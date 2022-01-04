const setError = (error) => {
  return ({
    type: 'SET_ERROR',
    error: error
  });
};

export default setError;