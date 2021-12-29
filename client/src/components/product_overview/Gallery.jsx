import React, {useState} from 'react';
import Images from './Images.jsx';

const Gallery = (props) => {
  console.log('in gallery', props.currentStyle)
  return (
    <div>
      {props.currentStyle.photos.map((photo, index) => {
        return <Images photo={photo} key={index}/>;
      })}
    </div>
  );
};


export default Gallery;