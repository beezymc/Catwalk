import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './Cart.jsx';
import Styles from './Styles.jsx';
import Gallery from './Gallery.jsx';
import Description from './Description.jsx';
import css from './styles.module.css';
import { getProducts } from '../../shared/api.js';



const ProductOverview = (props) => {

  const [styles, setStyles] = useState([]);
  const [product, setProduct] = useState({});
  const [currentStyle, setStyle] = useState({
    photos: [
      {
        url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg',
        thumbnail_url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'
      }
    ]
  });
  const [mainUrl, setMainUrl] = useState(currentStyle.photos[0].url);
  const [salePrice, setSalePrice] = useState(null);


  useEffect(() => {
    axios.get('/api/styles', {
      params: { "product_id": "63616" }
    })
      .then((response) => {
        console.log(response.data.results)
        setStyles(response.data.results)
        setStyle(response.data.results[0])
        setMainUrl(response.data.results[0].photos[0].url)
      })
      .catch((err) => {
        console.log('err occurred', err)
      })
  }, []);

  useEffect(() => {
    axios.get('/api/products', {
      params: { "product_id": "63616" }
    })
      .then((response) => {
        setProduct(response.data)
      })
      .catch((err) => {
        console.log('err occurred', err)
      })
  }, []);


  //console.log(styles);
  //console.log(product);
  //console.log(currentStyle);
  //console.log('main image url', mainUrl)






  return (
    <div>
      <div className={css.mainImageWrapper}>
        <img src={mainUrl} className={css.imgSize2}></img>
      </div>
      <div className={css.galleryWrapper}>
        <Gallery currentStyle={currentStyle} setMainUrl={setMainUrl}/>
      </div>
      <div className={css.descriptionWrapper}>
        <Description product={product} currentStyle={currentStyle}/>
      </div>
      <div className={css.stylesWrapper}>
        <Styles styles={styles} setStyle={setStyle} setMainUrl={setMainUrl} setSalePrice={setSalePrice} currentStyle={currentStyle}/>
      </div>
      <div className={css.cartWrapper}>
        <Cart />
      </div>
    </div>
  );

};

export default ProductOverview;


