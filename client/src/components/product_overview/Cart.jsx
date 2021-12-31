import React, { useState, useEffect } from 'react';
import { addCart } from '../../shared/api.js';

const Cart = (props) => {
  const [size, setSize] = useState(0);
  const [maxQuantity, setMaxQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [quantities, setQuantities] = useState([]);
  const [currentSku, setCurrentSku] = useState(0)
  const sizeList = [];
  const quantity = [];
  const skus = [];
  for (var key in props.currentStyle.skus) {
    let sku = props.currentStyle.skus[key]
    skus.push(key)
    for (var key in sku) {
      if (key === 'size') {
        sizeList.push(sku[key])
      } else {
        quantity.push(sku[key])
      }
    }
  }
  const onChange = () => {
    const range = [];
    setSize(event.target.value)
    let sizeIndex = sizeList.indexOf(event.target.value)
    setMaxQuantity(quantity[sizeIndex])
    setCurrentSku(skus[sizeIndex])
    //console.log('quantity max', quantity[sizeIndex]);
    for (var i = 1; i <= quantity[sizeIndex]; i++) {
      if (i <= 15) {
        range.push(i)
      }
    }
    setQuantities(range)
  }
  const onChange2 = () => {
    setAmount(event.target.value)
  }

  const onClick = () => {
    addCart(currentSku, amount);
  }
  // console.log(props.currentStyle.skus)
  // console.log("size state", size)
  // console.log('amount selected', amount)
  // console.log('range', quantities)
  console.log('currentsku', currentSku)
  console.log('amount', amount)
  if (size > 0) {
    return (
      <div>
        <h4>Select Size</h4>
        <select onChange={onChange}>
          <option> Select a Size </option>
          {sizeList.map((x, y) =>
            <option value={x} key={y}>{x} Size</option>)
          }</select>
        <select onChange={onChange2}>
          <option> Select a Quantity </option>
          {quantities.map((x, y) =>
            <option value={x} key={y}>{x}</option>)
          }
        </select>
        <button onClick={onClick}> Add to cart </button>
      </div>
    );
  } else {
    return (
      <div>
        <h4>Select Size</h4>
        <select onChange={onChange}>
          <option> Select a Size </option>
          {sizeList.map((x, y) =>
            <option value={x} key={y}>{x} Size</option>)
          }</select>
        <button onClick={onClick}> Add to cart </button>
      </div>
    );
  }

};

export default Cart;

