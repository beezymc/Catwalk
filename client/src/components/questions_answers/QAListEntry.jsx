// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem.jsx'
import AnswersList from './AnswersList.jsx'

const QAListEntry = ({ item }) => {
    return (
        <li>
            <div><QuestionItem questionInfo={item} /></div>
            <div><AnswersList answers={item.answers} /></div>
        </li>

    )
}
export default QAListEntry;