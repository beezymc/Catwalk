import React, { useState, useEffect } from 'react';
import { addCart } from '../../shared/api.js';
import css from './styles.module.css';
import { getSkuData } from './utils.js';

export const Cart = (props) => {
  const [size, setSize] = useState(0);
  const [maxQuantity, setMaxQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [quantities, setQuantities] = useState([]);
  const [currentSku, setCurrentSku] = useState(0);

  const { quantity, sizeList, skus } = getSkuData(props.currentVariation);

  const handleSizeChange = (event) => {
    const range = [];
    setSize(event.target.value)
    const sizeIndex = sizeList.indexOf(event.target.value)
    setMaxQuantity(quantity[sizeIndex])
    setCurrentSku(skus[sizeIndex])
    for (var i = 1; i <= quantity[sizeIndex]; i++) {
      if (i <= 15) {
        range.push(i)
      }
    }
    setQuantities(range)
  }

  if (size !== 0) {
    return (
      <div className={css.selectWrapper}>
        <select className={css.dropdown} onChange={handleSizeChange}>
          <option> Select a Size </option>
          {sizeList.map((size, index) =>
            <option value={size} key={index}>{size} Size</option>)
          }</select>
          <br />
        <select className={css.dropdown} onChange={(event) => setAmount(event.target.value)}>
          <option> Select a Quantity </option>
          {quantities.map((quantity, index) =>
            <option value={quantity} key={index}>{quantity}</option>)
          }
        </select>
        <button className={css.cartButton} onClick={() => {
          for (var i = 0; i < amount; i++) {
            addCart(currentSku);
          }
        }}> Add to cart </button>
      </div>
    );
  }

  return (
    <div className={css.selectWrapper}>
      <select className={css.dropdown} onChange={handleSizeChange}>
        <option> Select a Size </option>
        {sizeList.map((size, index) =>
          <option value={size} key={index}>{size} Size</option>)
        }</select>
    </div>
  );
};
