import React from 'react';
import css from './styles.module.css';

const Images = (props) => {
  return (
    <div>
      <img onClick={() => props.setMainUrl(props.photo.url)} src={props.photo.thumbnail_url} className={css.imgSize}></img>
    </div>
  );
};


export default Images;