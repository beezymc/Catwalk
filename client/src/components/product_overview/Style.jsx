import React, {useState} from 'react';

const Style = (props) => {
  const onClick = () => {
    props.setStyle(props.style);
    props.setMainUrl(props.style.photos[0].url);
    props.setSalePrice(props.style.sale_price);
  };
  return (
    <div>
      <button onClick={onClick}> {props.style.name} </button>
    </div>
  );
};


export default Style;