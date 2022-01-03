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
  const [imageIndex, setImageIndex] = useState(0);


  useEffect(() => {
    axios.get('/api/styles', {
      params: { "product_id": "63616" }
    })
      .then((response) => {
        //console.log(response.data.results)
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

  const limitedPictureArray = currentStyle.photos.slice(0, 10);
  console.log('limited image array', limitedPictureArray)
  const currentPicture = limitedPictureArray[imageIndex].url || 'https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1';
  //console.log(styles);
  //console.log(product);
  //console.log(currentStyle);
  //console.log('main image url', mainUrl)
  //console.log(imageIndex);





  return (
    <div>
      <div className={css.mainImageWrapper}>
        <img src={currentPicture} className={css.imgSize2}></img>
      </div>
      <div className={css.galleryWrapper}>
        <Gallery limitedPictureArray={limitedPictureArray} setMainUrl={setMainUrl} setImageIndex={setImageIndex}/>
      </div>
      <img src="https://img.icons8.com/external-prettycons-solid-prettycons/60/000000/external-left-arrow-orientation-prettycons-solid-prettycons.png" onClick={() => {setImageIndex(imageIndex - 1)}} className={imageIndex === 0 ? css.hiddenArrow : css.leftArrow}/>
      <img src="https://img.icons8.com/external-prettycons-solid-prettycons/60/000000/external-right-arrow-orientation-prettycons-solid-prettycons.png" onClick={() => {setImageIndex(imageIndex + 1)}} className={imageIndex === limitedPictureArray.length-1 ? css.hiddenArrow : css.rightArrow}/>
      <div className={css.descriptionWrapper}>
        <Description product={product} currentStyle={currentStyle}/>
      </div>
      <div className={css.stylesWrapper}>
        <Styles styles={styles} setStyle={setStyle} setMainUrl={setMainUrl} setSalePrice={setSalePrice} currentStyle={currentStyle}/>
      </div>
      <div className={css.cartWrapper}>
        <Cart currentStyle={currentStyle}/>
      </div>
    </div>
  );

};

export default ProductOverview;


