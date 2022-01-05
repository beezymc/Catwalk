import React, { useState, useEffect } from 'react';
import { addCart } from '../../shared/api.js';
import css from './styles.module.css';

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
    for (var i = 0; i <= amount; i++) {
      addCart(currentSku);
    }
  }
  if (size != 0) {
    return (
      <div className={css.selectWrapper}>
        <h4>Select Size</h4>
        <select className={css.customSelect} onChange={onChange}>
          <option> Select a Size </option>
          {sizeList.map((size, index) =>
            <option value={size} key={index}>{size} Size</option>)
          }</select>
        <select className={css.customSelect} onChange={onChange2}>
          <option> Select a Quantity </option>
          {quantities.map((quantity, index) =>
            <option value={quantity} key={index}>{quantity}</option>)
          }
        </select>
        <button className={css.cartButton} onClick={onClick}> Add to cart </button>
      </div>
    );
  } else {
    return (
      <div className={css.selectWrapper}>
        <h4>Select Size</h4>
        <select className={css.customSelect} onChange={onChange}>
          <option> Select a Size </option>
          {sizeList.map((size, index) =>
            <option value={size} key={index}>{size} Size</option>)
          }</select>
      </div>
    );
  }

};

export default Cart;

