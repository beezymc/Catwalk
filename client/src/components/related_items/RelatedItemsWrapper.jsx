import React from 'react';
import ReactDOM from 'react-dom';

class RelatedItemsWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.handleProductInit();
  }

  render() {
    if(this.props.currentProduct === {} || this.props.relatedItemsList === []) {
      return(
        <div>
          Loading.
        </div>
      )
    }
    return(
      <div>
        {this.props.currentProduct.name}
        {this.props.relatedItemsList[0]}
      </div>
    )
  }
}

export default RelatedItemsWrapper;