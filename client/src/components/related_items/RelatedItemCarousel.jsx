import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx';
import styles from './relateditems.module.css';

const RelatedItemCarousel = (props) => {
  const [hideRightArrow, setHideRightArrow] = useState(false);
  const [hideLeftArrow, setHideLeftArrow] = useState(true);

  let relatedItemDivs;

  if (props.relatedItemsList && props.relatedStyles && props.relatedItemsReviews) {
    relatedItemDivs = props.relatedItemsList.map((relatedItem, index) => {
      return (
        <RelatedItem
          key={index}
          relatedItem={relatedItem}
          currentProduct={props.currentProduct}
          relatedStyle={props.relatedStyles[index]}
          relatedItemReview={props.relatedItemsReviews[index]}
          handleProductInit={props.handleProductInit}
          setHideLeftArrow={setHideLeftArrow}
          setHideRightArrow={setHideRightArrow}
        />
      );
    });
  }

  const scrollCarouselLeft = () => {
    const div = document.getElementById('related-items-carousel');
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
    const div = document.getElementById('related-items-carousel');
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

  if (relatedItemDivs) {
    return (
      <div className={styles.carousel}>
        Related Products
        <div className={styles.relatedItemsCarousel}>
          {
            hideLeftArrow ? ''
              : <div className={styles.leftArrow} onClick={() => { scrollCarouselRight(); }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
              </div>
          }
          <div className={styles.relatedItems} id='related-items-carousel'>
            {relatedItemDivs}
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
  }
  return (
    <div className={styles.carousel}>
      Loading.
    </div>
  );
};

export default RelatedItemCarousel;