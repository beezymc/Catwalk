import React, { useState } from 'react';
import css from './styles.module.css';

export const Style = (props) => {
  const onClick = () => {
    props.setStyle(props.style);
    props.setImageIndex(0);
    props.setSalePrice(props.style.sale_price);
  };
  return (
    <div className={css.buttonWrapper}>
      <button className={css.modalButton} onClick={onClick}>
        <img className={css.modalButton} src={props.style.photos[0].thumbnail_url}></img>
      </button>
      <span className={css.styleNames}> {props.style.name} </span>
    </div>
  );
};