import axios from 'axios';
import React, {useState, useEffect} from 'react';


const QAList = () => {
    useEffect(() => {
    //go to axios github docs -> section Request Config
    axios.get('/api/questions', {params: {product_id: '63609'}})
    .then((data) => {
        console.log(data)
    })
    .catch((err) => console.log(err))
    
})
    return 'get works';    
}

export default QAList;