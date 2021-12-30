// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem.jsx';
import AnswersList from './AnswersList.jsx';
import styles from './qa.module.css';

const QAListEntry = ({ item }) => {
    return (
        <li>
            <div className={styles.listEntry}><QuestionItem questionInfo={item} />
            <AnswersList answers={item.answers} /></div>
        </li>

    )
}
export default QAListEntry;