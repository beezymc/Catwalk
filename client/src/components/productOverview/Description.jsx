import React from 'react';
import css from './styles.module.css';

const Description = (props) => {
  if (props.currentVariation.sale_price !== null) {
    return (
      <div className={css.productOverviewDescription}>
        <span className={css.descriptionBreak}>{props.product.category}</span>
        <span className={css.productTitle}>{props.product.name}</span>
        <div className={css.descriptionBreak}>
          <span className={css.strikeThrough}>${props.product.default_price}</span>
          <span>${props.currentVariation.sale_price}</span>
        </div>
        <span className={css.descriptionBreak}>{props.product.description} </span>
      </div>
    );
  }

  return (
    <div className={css.productOverviewDescription}>
      <span className={css.descriptionBreak}> {props.product.category} </span>
      <span className={css.productTitle}> {props.product.name} </span>
      <span className={css.descriptionBreak}> ${props.product.default_price} </span>
      <span className={css.descriptionBreak}> {props.product.description} </span>
    </div>
  );
};

export default Description;