import React from 'react';
import Images from './Images.jsx';

const Gallery = (props) => {
  console.log('in gallery', props.currentStyle)
  return (
    <div>
      {props.currentStyle.photos.map(photo =>
        <Images photo={photo} />
      )}
    </div>
  );
};


export default Gallery;