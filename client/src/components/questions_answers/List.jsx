import axios from 'axios';
import React, { useState, useEffect } from 'react';
import QAListEntry from './QAListEntry.jsx';
import SearchBar from './SearchBar.jsx';


const QAList = () => {
    const [questionsData, setQuestionData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get('/api/questions', { params: { product_id: '63609' } })  //go to axios github docs -> section Request Config
            .then((data) => {
                setQuestionData(data.data.results);
                //TODO: refactor
                setSearchResults(data.data.results);
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <div>
            <div>
            <><SearchBar data={questionsData} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchResults={searchResults} setSearchResults={setSearchResults}/></>
            </div>
            <div>
            <ul>{
                searchResults.map((item) => (
                    <><QAListEntry item={item} /></>
                ))
            }
            </ul>
            </div>
        </div>

    )
}

export default QAList;