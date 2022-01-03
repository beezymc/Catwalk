import React from 'react';
import css from './styles.module.css';

const Images = (props) => {
  return (
    <div>
      <img onClick={() => props.setImageIndex(props.index)} src={props.photo.thumbnail_url} className={css.imgSize}></img>
    </div>
  );
};


export default Images;