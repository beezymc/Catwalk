import { connect } from 'react-redux';
// import the component the props that need updating/the event handler will be firing within.
import RelatedItemsWrapper from '../../components/related_items/RelatedItemsWrapper.jsx';
// import the event handler action from Actions
import handleProductInit from '../actions/initializeProduct.js';

//place any props you need from the global state here (or remove if none).
const mapStateToProps = (state) => {
  return {
    currentProduct: state.currentProduct,
    relatedItemsList: state.relatedItemsList
  };
};

//place any events that fire that alter the global state here (or remove if none).
const mapDispatchToProps = (dispatch) =>{
  return {
    handleProductInit: () => dispatch(handleProductInit())
  };
};

//use whichever connect syntax includes the functions created above.
const RelatedItemsContainer = connect(mapStateToProps, mapDispatchToProps)(RelatedItemsWrapper);

export default RelatedItemsContainer;
