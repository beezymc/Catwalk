import React, { useState } from 'react';
import css from './styles.module.css';


export const Gallery = ({ limitedPictureArray, setImageIndex }) => {
  return (
    <div className={css.imagesWrapper}>
      {limitedPictureArray.map((photo, index) => (
        <div key={`${index}-thumbnailPictureIndex`}>
          <img onClick={() => setImageIndex(index)} src={photo.thumbnail_url} className={css.imgSize}></img>
        </div>
      ))}
    </div>
  );
};


