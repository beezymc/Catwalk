import React, {useState} from 'react';
import Images from './Images.jsx';
import css from './styles.module.css';


const Gallery = (props) => {
  //console.log('in gallery', props.currentStyle)
  return (
    <div className={css.imagesWrapper}>
      {props.currentStyle.photos.map((photo, index) => {
        return <Images photo={photo} key={index} setMainUrl={props.setMainUrl}/>;
      })}
    </div>
  );
};


export default Gallery;