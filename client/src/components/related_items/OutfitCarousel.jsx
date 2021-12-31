import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import OutfitItem from './OutfitItem.jsx';
import styles from './relateditems.module.css';

const OutfitCarousel = (props) => {
  const [hideRightArrow, setHideRightArrow] = useState(true);
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [outfitItems, updateOutfitItems] = useState([]);

  useEffect(() => {
    const div = document.getElementById('outfit-carousel');
    const maxScrollLeft = div.scrollWidth - div.clientWidth;
    if ((div.scrollWidth !== div.clientWidth) && hideRightArrow && (div.scrollLeft !== maxScrollLeft)) {
      setHideRightArrow(false);
    }
    if ((div.scrollWidth === div.clientWidth) && !hideRightArrow && (div.scrollLeft === maxScrollLeft)) {
      setHideRightArrow(true);
    }
  }, [outfitItems]);

  const handleNewOutfitItem = () => {
    let noMatch = true;
    for (let i = 0; i < outfitItems.length; i++) {
      if (outfitItems[i].key === props.currentProduct.id) {
        noMatch = false;
        break;
      }
    }
    if (noMatch) {
      updateOutfitItems([{
        key: props.currentProduct.id,
        currentProduct: props.currentProduct,
        currentProductReviews: props.currentProductReviews,
        currentProductStyles: props.currentProductStyles
      }, ...outfitItems]);
    }
  };

  const removeItem = (id) => {
    updateOutfitItems(outfitItems.filter((item) => {
      console.log(item.key, id);
      return item.key !== id;
    }));
    const div = document.getElementById('outfit-carousel');
    if (div.scrollWidth === div.clientWidth) {
      setHideLeftArrow(true);
      setHideRightArrow(true);
    }
  };

  const scrollCarouselLeft = () => {
    const div = document.getElementById('outfit-carousel');
    div.scrollLeft += 220;
    const maxScrollLeft = div.scrollWidth - div.clientWidth;
    if (div.scrollLeft === maxScrollLeft) {
      setHideRightArrow(true);
    } else {
      setHideRightArrow(false);
    }
    if (div.scrollLeft === 0) {
      setHideLeftArrow(true);
    } else {
      setHideLeftArrow(false);
    }
  };

  const scrollCarouselRight = () => {
    const div = document.getElementById('outfit-carousel');
    div.scrollLeft -= 220;
    const maxScrollLeft = div.scrollWidth - div.clientWidth;
    if (div.scrollLeft === maxScrollLeft) {
      setHideRightArrow(true);
    } else {
      setHideRightArrow(false);
    }
    if (div.scrollLeft === 0) {
      setHideLeftArrow(true);
    } else {
      setHideLeftArrow(false);
    }
  };
  return (
    <div className={styles.carousel}>
      Your Outfits
      <div className={styles.outfitCarousel}>
        {
          hideLeftArrow ? ''
            : <div className={styles.leftArrow} onClick={() => { scrollCarouselRight(); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
            </div>
        }
        <div className={styles.outfitItems} id='outfit-carousel'>
          {
            hideLeftArrow ? ''
              : <div className={styles.leftTransparency}/>
          }
          <div className={styles.innerCardAdd} onClick={() => {
            handleNewOutfitItem();
          }}>
            <div className={styles.addOutfitText}>
              Add New Outfit
            </div>
            <div className={styles.addOutfit}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            </div>
          </div>
          {outfitItems.map((item) => {
            return (<OutfitItem
              key={item.key}
              currentProduct={item.currentProduct}
              currentProductStyles={item.currentProductStyles}
              currentProductReviews={item.currentProductReviews}
              setHideRightArrow={setHideRightArrow}
              setHideLeftArrow={setHideLeftArrow}
              removeItem={removeItem}
            />);
          })}
          {
            hideRightArrow ? ''
              : <div className={styles.rightTransparency}/>
          }
        </div>
        {
          hideRightArrow ? ''
            : <div className={styles.rightArrow} onClick={() => { scrollCarouselLeft(); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </div>
        }
      </div>
    </div>
  );
};

export default OutfitCarousel;