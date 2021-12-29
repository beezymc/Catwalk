import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './Cart.jsx';
import Styles from './Styles.jsx';
import Gallery from './Gallery.jsx';
import Description from './Description.jsx';
import { StylesWrap, GalleryWrap, DescriptionWrap, CartWrap } from '../Styled-Components';
import { getProducts } from '../../shared/api.js';


const ProductOverview = (props) => {

  const [styles, setStyles] = useState([]);
  const [product, setProduct] = useState({});
  const [currentStyle, setStyle] = useState({
    photos: [
      {
        url: 'https://www.vecteezy.com/vector-art/1826248-progress-loading-bar-buffering-download-upload-and-loading-icon',
        thumbnail_url: 'https://www.vecteezy.com/vector-art/1826248-progress-loading-bar-buffering-download-upload-and-loading-icon'
      }
    ]
  });

  useEffect(() => {
    axios.get('/api/styles', {
      params: { "product_id": "63613" }
    })
      .then((response) => {
        setStyles(response.data.results)
        setStyle(response.data.results[0])
      })
      .catch((err) => {
        console.log('err occurred', err)
      })
  }, []);

  useEffect(() => {
    axios.get('/api/products', {
      params: { "product_id": "63613" }
    })
      .then((response) => {
        setProduct(response.data)
      })
      .catch((err) => {
        console.log('err occurred', err)
      })
  }, []);


  console.log(styles);
  // console.log(product);
  console.log(currentStyle)






  return (
    <div>
      <GalleryWrap>
        <Gallery currentStyle={currentStyle} />
      </GalleryWrap>
      <DescriptionWrap>
        <Description product={product} />
      </DescriptionWrap>
      <StylesWrap>
        <Styles styles={styles} setStyle={setStyle} />
      </StylesWrap>
      <CartWrap>
        <Cart />
      </CartWrap>
    </div>
  );

};

export default ProductOverview;


