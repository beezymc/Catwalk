import React from 'react';
import QAList from './List.jsx';
import SearchBar from './SearchBar.jsx';
import FormBar from './FormBar.jsx'

const QAWrapper = () => {
    return (
        <div>
        <><SearchBar /></>
        <><QAList /></>
        <><FormBar/></>
        </div>
    )
}

export default QAWrapper;

