// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem.jsx';
import AnswersList from './AnswersList.jsx';
import styles from './qa.module.css';

const QAListEntry = ({ item }) => {
  return (
    <li>
      <div className={styles.qaItem}>
        <QuestionItem questionInfo={item} /></div>
        <div className={styles.qaItem}><AnswersList answers={item.answers} question_id={item.question_id}/></div>
    </li>

  );
};
export default QAListEntry;