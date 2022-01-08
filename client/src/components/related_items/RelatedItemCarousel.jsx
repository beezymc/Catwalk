import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx';
import styles from './relateditems.module.css';
import { useParams } from 'react-router-dom';
import { scrollAccelerator } from './utils.js';

const RelatedItemCarousel = (props) => {
  const [hideRightArrow, setHideRightArrow] = useState(true);
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [error, setError] = useState(false);
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedReviews, setRelatedReviews] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [relatedItemDivs, setRelatedItemDivs] = useState([]);
  const [ticking, setTicking] = useState(false);

  let { productId } = useParams();
  const scrollRef = useRef(null);

  useEffect(() => {
    axios.get(`/api/related/?product_id=${productId}&type=related`)
      .then((related) => {
        setRelatedItems(related.data.itemsResults);
        setRelatedReviews(related.data.reviewsResults);
        setRelatedStyles(related.data.stylesResults);
        const divArr = [];
        for (let i = 0; i < related.data.itemsResults.length; i++) {
          divArr.push({
            key: i,
            relatedItem: related.data.itemsResults[i],
            relatedStyle: related.data.stylesResults[i],
            relatedItemReview: related.data.reviewsResults[i]
          })
        }
        setRelatedItemDivs(divArr);
        const el = scrollRef.current;
        el.scrollLeft = 0;
        setHideLeftArrow(true);
        if (divArr.length > 0 && (el.scrollLeft === el.scrollWidth - el.clientWidth) && !hideRightArrow) {
          setHideRightArrow(true);
        }
        if (divArr.length > 0 && (el.scrollLeft !== el.scrollWidth - el.clientWidth) && hideRightArrow) {
          setHideRightArrow(false);
        }
      })
      .catch((error) => {
        setError(true);
      });
  }, [props.currentProduct]);

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
    if (el) {
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

  if (error) {
    return (
      <div className={styles.carousel}>
        <div className={styles.relatedItemsCarousel}>
          <div className={styles.relatedItems} id='related-items-carousel' ref={scrollRef}>
            <div className={styles.noItems}>
              Error retrieving related items. Please try again later.
            </div>
          </div>
        </div>
      </div>
    );
  }
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
        <div className={`${hideLeftArrow ? styles.leftTransparencyHidden : styles.leftTransparency }`}/>
        <div className={styles.relatedItems} id='related-items-carousel' ref={scrollRef}>
          {
            relatedItemDivs.length > 0
            ? relatedItemDivs.map((relatedItem) => {
              return (
                <RelatedItem
                  key={relatedItem.key}
                  relatedItem={relatedItem.relatedItem}
                  currentProduct={props.currentProduct}
                  relatedStyle={relatedItem.relatedStyle}
                  relatedItemReview={relatedItem.relatedItemReview}
                  handleProductInit={props.handleProductInit}
                />
              );
            })
            : <div className={styles.noItems}>
              No related products found.
            </div>
          }
        </div>
        <div className={`${hideRightArrow ? styles.rightTransparencyHidden : styles.rightTransparency }`}/>
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

export default RelatedItemCarousel;