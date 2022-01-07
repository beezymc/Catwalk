import React, { useState, useEffect, useRef } from 'react';
import OutfitItem from './OutfitItem.jsx';
import styles from './relateditems.module.css';
import { scrollAccelerator } from './utils.js';

const OutfitCarousel = (props) => {
  const [hideRightArrow, setHideRightArrow] = useState(true);
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [outfitItems, updateOutfitItems] = useState([]);
  const [ticking, setTicking] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    if ((el.scrollWidth !== el.clientWidth) && hideRightArrow && (el.scrollLeft !== maxScrollLeft)) {
      setHideRightArrow(false);
    }
    if ((el.scrollWidth === el.clientWidth) && !hideRightArrow && (el.scrollLeft === maxScrollLeft)) {
      setHideRightArrow(true);
    }
  }, [outfitItems]);

  const handleNewOutfitItem = () => {
    let noMatch = true;
    for (let i = 0; i < outfitItems.length; i++) {
      if (outfitItems[i].key === props.currentStyle.style_id) {
        noMatch = false;
        break;
      }
    }
    if (noMatch) {
      updateOutfitItems([{
        key: props.currentStyle.style_id,
        currentProduct: props.currentProduct,
        currentProductReviews: props.currentProductReviews,
        currentProductStyles: props.currentProductStyles,
        currentStyle: props.currentStyle
      }, ...outfitItems]);
    }
  };

  const removeItem = (id) => {
    updateOutfitItems(outfitItems.filter((item) => {
      return item.key !== id;
    }));
    const el = scrollRef.current;
    if (el.scrollWidth === el.clientWidth) {
      setHideLeftArrow(true);
      setHideRightArrow(true);
    }
  };

  useEffect(() => {
    let el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        setTicking(false);
        if (!ticking) {
          window.requestAnimationFrame(function() {
            setTicking(false);
          })
          setTicking(true);
        }
        if (e.deltaY === 0) {
          return;
        }
        e.preventDefault();
        const newDeltaY = scrollAccelerator(e.deltaY);
        el.scrollTo({
          left: el.scrollLeft + newDeltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return (() => {
        el.removeEventListener("wheel", onWheel);
      });
    }
  }, []);

  useEffect(() => {
    if(!ticking) {
      handleArrows();
    }
  }, [ticking]);

  const handleArrows = () => {
    const el = scrollRef.current;
    if (el.scrollLeft === (el.scrollWidth - el.clientWidth) && !hideRightArrow) {
      setHideRightArrow(true);
    }
    if (el.scrollLeft !== (el.scrollWidth - el.clientWidth) && hideRightArrow) {
      setHideRightArrow(false);
    }
    if (el.scrollLeft === 0 && !hideLeftArrow) {
      setHideLeftArrow(true);
    }
    if (el.scrollLeft !== 0 && hideLeftArrow) {
      setHideLeftArrow(false);
    }
  };

  const scrollCarouselLeft = () => {
    const el = scrollRef.current;
    el.scrollLeft += 222;
    handleArrows();
  };

  const scrollCarouselRight = () => {
    const el = scrollRef.current;
    el.scrollLeft -= 222;
    handleArrows();
  };
  return (
    <div className={styles.carousel}>
      Your Outfits
      <div className={styles.outfitCarousel}>
        {
          hideLeftArrow ? ''
            : <div className={styles.leftArrow} onClick={() => { scrollCarouselRight(); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>Left Arrow</title>
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
              </svg>
            </div>
        }
        {
          hideLeftArrow ? ''
            : <div className={styles.leftTransparency}/>
        }
        <div className={styles.outfitItems} id='outfit-carousel'  ref={scrollRef}>

          <div className={styles.innerCardAdd} onClick={() => {
            handleNewOutfitItem();
          }}>
            <div className={styles.addOutfitText}>
              Add New Outfit
            </div>
            <div className={styles.addOutfit}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
              </svg>
            </div>
          </div>
          {outfitItems.map((item) => {
            return (<OutfitItem
              key={item.key}
              currentProduct={item.currentProduct}
              currentProductStyles={item.currentProductStyles}
              currentProductReviews={item.currentProductReviews}
              currentStyle={item.currentStyle}
              removeItem={removeItem}
            />);
          })}
        </div>
        {
          hideRightArrow ? ''
            : <div className={styles.rightTransparency}/>
        }
        {
          hideRightArrow ? ''
            : <div className={styles.rightArrow} onClick={() => { scrollCarouselLeft(); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>Right Arrow</title>
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
              </svg>
            </div>
        }
      </div>
    </div>
  );
};

export default OutfitCarousel;