import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cart } from './Cart.jsx';
import Gallery from './Gallery.jsx';
import Description from './Description.jsx';
import css from './styles.module.css';
import { getProducts } from '../../shared/api.js';

export const ProductOverview = ({ currentVariation, productVariations, setVariation, currentProduct }) => {
  const [salePrice, setSalePrice] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  // need to setImageIndex to 0 onClick of related item picture
  const limitedPictureArray = currentVariation.photos.slice(0, 10);
  const currentPicture = limitedPictureArray[imageIndex].url || 'https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1';

  return (
    <div>
      <div className={css.mainImageWrapper}>
        <img src={currentPicture} className={css.imgSize2}></img>
      </div>
      <div className={css.galleryWrapper}>
        <Gallery limitedPictureArray={limitedPictureArray} setImageIndex={setImageIndex} />
      </div>
      <img
        src="https://img.icons8.com/ios/50/000000/chevron-left.png"
        onClick={() => { setImageIndex(imageIndex - 1) }}
        className={imageIndex === 0 ? css.hiddenArrow : css.leftArrow} />
      <img
        src="https://img.icons8.com/ios/50/000000/chevron-right.png"
        onClick={() => { setImageIndex(imageIndex + 1) }}
        className={imageIndex === limitedPictureArray.length - 1 ? css.hiddenArrow : css.rightArrow} />
      <div className={css.descriptionWrapper}>
        <Description product={currentProduct} currentVariation={currentVariation} />
      </div>
      <div className={css.stylesWrapper}>
        <h4>Select Style/Color</h4>
        <div className={css.styleSelectionWrapper}>
          {productVariations && productVariations.map((variation, index) => (
            <div className={css.buttonWrapper} key={`${index}-variation-key`} onClick={() => {
              setVariation(variation);
              setImageIndex(0);
              setSalePrice(variation.sale_price);
            }}>
              <img className={css.modalButton} src={variation.photos[0].thumbnail_url} />
              <span className={css.styleNames}> {variation.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={css.cartWrapper}>
        <Cart currentVariation={currentVariation} />
      </div>
    </div>
  );
};
