import React from 'react';
import Style from './Style.jsx';

const Styles = (props) => {
  return (
    <div>
      <h4> Select Style/Color </h4>
      {props.styles.map(style =>
        <Style style={style} key={style.style_id} styles={props.styles} setStyle={props.setStyle}/>
      )}
    </div>
  );
};

export default Styles;