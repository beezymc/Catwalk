import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx';
import styles from './relateditems.module.css';
import { useParams } from 'react-router-dom';

const RelatedItemCarousel = (props) => {
  const [hideRightArrow, setHideRightArrow] = useState(true);
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [error, setError] = useState(false);
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedReviews, setRelatedReviews] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);

  let { productId } = useParams();

  useEffect(() => {
    axios.get(`/api/products/?product_id=${productId}&type=related`)
      .then((related) => {
        let relatedItemsPromises = [];
        let relatedReviewsPromises = [];
        let relatedStylesPromises = [];
        for (let i = 0; i < related.data.length; i++) {
          relatedItemsPromises.push(axios.get(`/api/products/?product_id=${related.data[i]}`));
          relatedReviewsPromises.push(axios.get(`/api/reviews/meta/?product_id=${related.data[i]}`));
          relatedStylesPromises.push(axios.get(`/api/products/?product_id=${related.data[i]}&type=styles`));
        }
        Promise.all(relatedItemsPromises)
          .then((relatedItems) => {
            setRelatedItems(relatedItems);
          })
          .catch((error) => {
            console.log(error);
            setError(true);
          });
        Promise.all(relatedReviewsPromises)
          .then((relatedReviews) => {
            setRelatedReviews(relatedReviews);
          })
          .catch((error) => {
            console.log(error);
            setError(true);
          });
        Promise.all(relatedStylesPromises)
          .then((relatedStyles) => {
            setRelatedStyles(relatedStyles);
          })
          .catch((error) => {
            console.log(error);
            setError(true);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [props.currentProduct]);

  let relatedItemDivs;

  if (relatedItems && relatedStyles && relatedReviews) {
    relatedItemDivs = relatedItems.map((relatedItem, index) => {
      return (
        <RelatedItem
          key={index}
          relatedItem={relatedItem}
          currentProduct={props.currentProduct}
          relatedStyle={relatedStyles[index]}
          relatedItemReview={relatedReviews[index]}
          handleProductInit={props.handleProductInit}
          setHideLeftArrow={setHideLeftArrow}
          setHideRightArrow={setHideRightArrow}
        />
      );
    });
  }

  if (relatedItemDivs.length > 0) {
    const div = document.getElementById('related-items-carousel');
    const maxScrollLeft = div.scrollWidth - div.clientWidth;
    if ((div.scrollWidth !== div.clientWidth) && hideRightArrow && (div.scrollLeft !== maxScrollLeft)) {
      setHideRightArrow(false);
    }
    if ((div.scrollWidth === div.clientWidth) && !hideRightArrow && (div.scrollLeft === maxScrollLeft)) {
      setHideRightArrow(true);
    }
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
  if (error) {
    return (
      <div className={styles.carousel}>
        404
      </div>
    );
  }
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
            {
              hideLeftArrow ? ''
                : <div className={styles.leftTransparency}/>
            }
            {relatedItemDivs}
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
  }
  return (
    <div className={styles.carousel}>
      Loading.
    </div>
  );
};

export default RelatedItemCarousel;