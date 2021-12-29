import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const RelatedItem = (props) => {
<<<<<<< HEAD
  // console.log(props.relatedItem);
  // console.log(props.currentProduct);
  return (
    <div>
      InnerDiv
    </div>
  );
=======
  if (props.relatedItem && props.relatedStyle && props.relatedItemReview && props.currentProduct) {
    const relatedItem = props.relatedItem.data;
    const relatedStyle = props.relatedStyle.data.results[0];
    const relatedRatings = props.relatedItemReview.data.ratings;
    let rating = 0;
    let denominator = 0;
    let numerator = 0;
    for (let key in relatedRatings) {
      let intKey = parseInt(key);
      let intVal = parseInt(relatedRatings[key]);
      numerator += intVal * intKey;
      denominator += 1;
    }
    if (numerator) {
      rating = (Math.round((numerator / denominator) * 4) / 4).toFixed(2);
    }
    const photo = relatedStyle.photos[0].thumbnail_url;
    const category = relatedItem.category;
    const name = relatedItem.name;
    const price = relatedStyle.sale_price ? relatedStyle.sale_price : relatedStyle.original_price;
    return (
      <div onClick={() => { props.handleProductInit(relatedItem.id); }}>
        <Link to={`/product/${relatedItem.id}`}>
          <div>
            <img src={photo}></img>
          </div>
          {category}
          {name}
          {price}
          {rating ? rating : ''}
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        Loading.
      </div>
    );
  }
>>>>>>> bda503217c6020740d93533c465627272ac9f36d
};

export default RelatedItem;