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
  const [relatedItemDivs, setRelatedItemDivs] = useState([]);

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
          .then((itemsResults) => {
            setRelatedItems(itemsResults);
            Promise.all(relatedReviewsPromises)
            .then((reviewsResults) => {
              setRelatedReviews(reviewsResults);
              Promise.all(relatedStylesPromises)
              .then((stylesResults) => {
                setRelatedStyles(stylesResults);
                const divArr = []
                for (let i = 0; i < itemsResults.length; i++) {
                  divArr.push({
                    key: i,
                    relatedItem: itemsResults[i],
                    relatedStyle: stylesResults[i],
                    relatedItemReview: reviewsResults[i]
                  })
                }
                setRelatedItemDivs(divArr);
                if (divArr.length > 0 &&
                  document.getElementById('related-items-carousel').scrollLeft ===
                  (document.getElementById('related-items-carousel').scrollWidth - document.getElementById('related-items-carousel').clientWidth) &&
                  !hideRightArrow) {
                  setHideRightArrow(true);
                }
                if (divArr.length > 0 &&
                  document.getElementById('related-items-carousel').scrollLeft !==
                  (document.getElementById('related-items-carousel').scrollWidth - document.getElementById('related-items-carousel').clientWidth)
                  && hideRightArrow) {
                  setHideRightArrow(false);
                }
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

  const handleArrows = () => {
    if (document.getElementById('related-items-carousel').scrollLeft ===
    (document.getElementById('related-items-carousel').scrollWidth - document.getElementById('related-items-carousel').clientWidth) &&
    !hideRightArrow) {
      setHideRightArrow(true);
    }
    if (document.getElementById('related-items-carousel').scrollLeft !==
    (document.getElementById('related-items-carousel').scrollWidth - document.getElementById('related-items-carousel').clientWidth)
    && hideRightArrow) {
      setHideRightArrow(false);
    }
    if (document.getElementById('related-items-carousel').scrollLeft === 0 && !hideLeftArrow) {
      setHideLeftArrow(true);
    }
    if (document.getElementById('related-items-carousel').scrollLeft !== 0 && hideLeftArrow) {
      setHideLeftArrow(false);
    }
  }

  const scrollCarouselLeft = () => {
    const div = document.getElementById('related-items-carousel');
    div.scrollLeft += 220;
    handleArrows();
  };

  const scrollCarouselRight = () => {
    const div = document.getElementById('related-items-carousel');
    div.scrollLeft -= 220;
    handleArrows();
  };

  if (error) {
    return (
      <div className={styles.carousel}>
        Error Retrieving Related Items. Please Try Again.
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
        <div className={styles.relatedItems} id='related-items-carousel'>
          {
            hideLeftArrow ? ''
              : <div className={styles.leftTransparency}/>
          }
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
                  setHideLeftArrow={setHideLeftArrow}
                  setHideRightArrow={setHideRightArrow}
                />
              );
            })
            : <div className={styles.noItems}>
              No related products found.
            </div>
          }
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

export default RelatedItemCarousel;