import React from 'react';
import css from './styles.module.css';

const Description = (props) => {
  if (props.currentStyle.sale_price !== null) {
    return (
      <div>
        <span> {props.product.category} </span>
        <br></br>
        <span> {props.product.name} </span>
        <br></br>
        <span> {props.product.description} </span>
        <br></br>
        <span className={css.strikeThrough}> {props.product.default_price} </span>
        <span> {props.currentStyle.sale_price} </span>
      </div>
    );
  } else {
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
  }
};

export default Description;