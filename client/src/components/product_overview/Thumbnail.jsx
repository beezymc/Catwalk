import React from 'react';
import css from './styles.module.css';


const Thumbnail = (props) => {
  //console.log(props.src);
  return (
    <div>
      <img className={css.modalButton} src={props.src[0].thumbnail_url}></img>
    </div>
  );
};


export default Thumbnail;