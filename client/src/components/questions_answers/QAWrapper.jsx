import React, { useState, useEffect, Suspense } from 'react';
import {
  BrowserRouter as Router,
 useLocation
} from "react-router-dom";
const QAList = React.lazy(() => import ('./MainList.jsx'));
import axios from 'axios';
import styles from './qa.module.css';


const QAWrapper = ({currentProduct}) => {
  const [id, setId] = useState();

  useEffect(() => {
    if (currentProduct.id !== undefined) {
      setId(currentProduct.id);
    }
  }, [currentProduct.id]);

  return (
    <Suspense fallback={
    <div className={styles.qaContainer}>
      LOADING...
    </div>}>
    <div className={styles.qaItem}><QAList productId={id} /></div>
    </Suspense>
  )
}

export default QAWrapper;