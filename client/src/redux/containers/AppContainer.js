import { connect } from 'react-redux';
// import the component the props that need updating/the event handler will be firing within.
import App from '../../components/app.jsx';
// import the event handler action from Actions
import handleProductInit from '../actions/initializeProduct.js';

//place any props you need from the global state here (or remove if none).
const mapStateToProps = (state) => {
  return {
    currentProduct: state.currentProduct,
    currentProductStyles: state.currentProductStyles,
    currentProductReviews: state.currentProductReviews,
    error: state.error
  };
};

//place any events that fire that alter the global state here (or remove if none).
const mapDispatchToProps = (dispatch) =>{
  return {
    handleProductInit: (q) => dispatch(handleProductInit(q))
  };
};

//use whichever connect syntax includes the functions created above.
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
