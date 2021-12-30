import React from 'react';
import Style from './Style.jsx';

const Styles = (props) => {
  return (
    <div>
      <h4> Select Style/Color </h4>
      {props.styles.map(style =>
        <Style style={style} key={style.style_id} setStyle={props.setStyle} setMainUrl={props.setMainUrl} setSalePrice={props.setSalePrice}currentStyle={props.currentStyle}/>
      )}
    </div>
  );
};

export default Styles;