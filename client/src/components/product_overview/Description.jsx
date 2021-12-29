import React from 'react';

const Description = (props) => {
  return (
    <div>
      <span> {props.product.category} </span>
      <br></br>
      <span> {props.product.name} </span>
      <br></br>
      <span> {props.product.description} </span>
      <br></br>
      <span> {props.product.default_price} </span>
    </div>
  );
};

export default Description;