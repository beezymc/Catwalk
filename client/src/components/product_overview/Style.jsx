import React, { useState } from 'react';
import css from './styles.module.css';
import Thumbnail from './Thumbnail.jsx';

const Style = (props) => {
  const onClick = () => {
    props.setStyle(props.style);
    props.setImageIndex(0);
    props.setSalePrice(props.style.sale_price);
  };
  return (
    <div className={css.buttonWrapper}>
      <button className={css.modalButton} onClick={onClick}>
        <Thumbnail src={props.style.photos} />
      </button>
      <span className={css.styleNames}> {props.style.name} </span>
    </div>
  );
};


export default Style;