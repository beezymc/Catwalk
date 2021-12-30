import React, {useState} from 'react';

const Style = (props) => {
  const onClick = () => {
    props.setStyle(props.style);
    props.setMainUrl(props.style.photos[0].url);
  };
  return (
    <div>
      <button onClick={onClick}> {props.style.name} </button>
    </div>
  );
};


export default Style;