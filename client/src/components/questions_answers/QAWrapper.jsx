import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
 useLocation
} from "react-router-dom";
import QAList from './MainList.jsx';
import axios from 'axios';
import styles from './qa.module.css';


const QAWrapper = ({currentProduct}) => {
  const [id, setId] = useState();

  //Use location hook to get  an ID from the URL
    // let location = useLocation();
    // let matchResult = location.pathname.match("\/product\/([0-9]+).+");
    // let productId = matchResult[1];

  useEffect(() => {
    if (currentProduct.id !== undefined) {
      setId(currentProduct.id);
    }
  }, [currentProduct.id]);

  return (
    <div className={styles.qaContainer}>
      <div className={styles.qaItem}><QAList productId={id} /></div>
    </div>
  )
}

export default QAWrapper;

