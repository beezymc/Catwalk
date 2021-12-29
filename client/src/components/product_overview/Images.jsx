import React from 'react';

const Images = (props) => {
  return (
    <div>
      <img src={props.photo.thumbnail_url}></img>
    </div>
  );
};


export default Images;