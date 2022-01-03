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
  const [salePrice, setSalePrice] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);


  useEffect(() => {
    axios.get('/api/styles', {
      params: { "product_id": "63616" }
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
      params: { "product_id": "63616" }
    })
      .then((response) => {
        setProduct(response.data)
      })
      .catch((err) => {
        console.log('err occurred', err)
      })
  }, []);

  const limitedPictureArray = currentStyle.photos.slice(0, 10);
  const currentPicture = limitedPictureArray[imageIndex].url || mainUrl;



  return (
    <div>
      <div className={css.mainImageWrapper}>
        <img src={currentPicture} className={css.imgSize2}></img>
      </div>
      <div className={css.galleryWrapper}>
        <Gallery limitedPictureArray={limitedPictureArray} setImageIndex={setImageIndex}/>
      </div>
      <img src="https://img.icons8.com/ios/50/000000/chevron-left.png" onClick={() => {setImageIndex(imageIndex - 1)}} className={imageIndex === 0 ? css.hiddenArrow : css.leftArrow}/>
      <img src="https://img.icons8.com/ios/50/000000/chevron-right.png" onClick={() => {setImageIndex(imageIndex + 1)}} className={imageIndex === limitedPictureArray.length-1 ? css.hiddenArrow : css.rightArrow}/>
      <div className={css.descriptionWrapper}>
        <Description product={product} currentStyle={currentStyle}/>
      </div>
      <div className={css.stylesWrapper}>
        <Styles styles={styles} setStyle={setStyle} setImageIndex={setImageIndex} setSalePrice={setSalePrice} currentStyle={currentStyle}/>
      </div>
      <div className={css.cartWrapper}>
        <Cart currentStyle={currentStyle}/>
      </div>
    </div>
  );

};

export default ProductOverview;


