import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
 useLocation
} from "react-router-dom";
import QAList from './MainList.jsx';
import FormBar from './FormBar.jsx';
import axios from 'axios';


const QAWrapper = () => {
  const [id, setId] = useState();

  let location = useLocation();
  //group 0 - the whole string, group 1 - first (). To get numeric id use matchResult[1]
  let matchResult = location.pathname.match("\/product\/([0-9]+).+");
  let productId = matchResult[1];
  
  useEffect(() => {
    setId(productId);
  }, []);

  return (
    <div>
      {/* <><SearchBar  /></> */}
      <><QAList productId={id} /></>
      <><FormBar productId={id} /></>
    </div>
  )
}

export default QAWrapper;

