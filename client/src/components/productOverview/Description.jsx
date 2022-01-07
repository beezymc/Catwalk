import React from 'react';
import css from './styles.module.css';

export const Description = ({ product, currentVariation }) => {
  if (currentVariation.sale_price !== null) {
    return (
      <div className={css.productOverviewDescription}>
        <span className={css.descriptionBreak}>{product.category}</span>
        <span className={css.productTitle}>{product.name}</span>
        <div className={css.descriptionBreak}>
          <span className={css.strikeThrough}>${product.default_price}</span>
          <span>${currentVariation.sale_price}</span>
        </div>
        <span className={css.productDescription}>{product.description} </span>
      </div>
    );
  }

  return (
    <div className={css.productOverviewDescription}>
      <span className={css.descriptionBreak}> {product.category} </span>
      <span className={css.productTitle}> {product.name} </span>
      <span className={css.descriptionBreak}> ${product.default_price} </span>
      <span className={css.productDescription}> {product.description} </span>
    </div>
  );
};
