import React, {useState} from 'react';

const Style = (props) => {
  return (
    <div>
      <button onClick={() => props.setStyle(props.style)}> {props.style.name} </button>
    </div>
  );
};


export default Style;