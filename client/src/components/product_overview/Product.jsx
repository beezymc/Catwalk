import React, { useState, useEffect } from 'react';
import Cart from './Cart.jsx';
import Styles from './Styles.jsx';
import Gallery from './Gallery.jsx';
import Description from './Description.jsx';
import { StylesWrap, GalleryWrap, DescriptionWrap, CartWrap } from '../Styled-Components';


const ProductOverview = (props) => {

  useEffect(() => {
    
  })



  return (
    <div>
      <GalleryWrap>
        <Gallery />
      </GalleryWrap>
      <DescriptionWrap>
        <Description />
      </DescriptionWrap>
      <StylesWrap>
        <Styles />
      </StylesWrap>
      <CartWrap>
        <Cart />
      </CartWrap>
    </div>
  );

};

export default ProductOverview;


