import axios from 'axios';
import React, { useState, useEffect } from 'react';
import QAListEntry from './QAListEntry.jsx'


const QAList = () => {
    const [questionsData, setQuestionData] = useState([]);

    useEffect(() => {
        axios.get('/api/questions', { params: { product_id: '63609' } })  //go to axios github docs -> section Request Config
            .then((data) => {
                setQuestionData(data.data.results);
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <ul>{
            questionsData.map((item) => (
                <><QAListEntry item={item} /></>
            ))
        }
        </ul>
    )
}

export default QAList;