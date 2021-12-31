import React, { useState, useEffect } from 'react';
import { addCart } from '../../shared/api.js';

const Cart = (props) => {
  const [size, setSize] = useState(0);
  const sizeList = [];
  for (var key in props.currentStyle.skus) {
    let sku = props.currentStyle.skus[key]
    for (var key in sku) {
      if (key === 'size') {
        sizeList.push(sku[key])
      }
    }
  }
  console.log(props.currentStyle.skus)
  console.log("size state", size)
  return (
    <div>
      <h4>Select Size</h4>
      <select onChange={() => setSize(event.target.value)}>
        <option> Select a Size </option>
        {sizeList.map((x, y) =>
          <option value={x} key={y}>{x} Size</option>)
        }</select>
      <button type="submit"> Add to cart </button>
    </div>
  );
};

export default Cart;

