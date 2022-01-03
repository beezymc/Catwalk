import React from 'react';
import Style from './Style.jsx';
import css from './styles.module.css';

const Styles = (props) => {
  return (
    <div>
      <h4> Select Style/Color </h4>
      <div className={css.styleSelectionWrapper}>
        {props.styles.map(style =>
          <Style style={style} key={style.style_id} setStyle={props.setStyle} setImageIndex={props.setImageIndex} setSalePrice={props.setSalePrice} currentStyle={props.currentStyle} />
        )}
      </div>
    </div>
  );
};

export default Styles;