import React, { useState } from 'react';
import styles from './qa.module.css';
import axios from 'axios';

const AnswersListEntry = ({ answer }) => {
  const [answerHelpfullness, setanswerHelpfullness] = useState(answer.helpfulness);
  const [isUpvoted, setUpvoted] = useState(false);
  const [isReported, setReported] = useState(false);

  const handleClick = () => {
    setanswerHelpfullness(answerHelpfullness + 1);
    setUpvoted(true);
    axios.put(`/api/answers/${answer.answer_id}/helpful`, {helpfulness: answerHelpfullness})
      .catch((err) => {
        console.log(err);
      });
  };

  const HandleReported = () => {
    setReported(true);
  };

  return (
    <div >
      <div className={styles.answer}> <span className={styles.question}>A:</span> {answer.body}</div>
      <div className={styles.answerInfo}>
        <span className={styles.answerInfo}>by {answer.answerer_name},
          {new Date(answer.date).toLocaleDateString(undefined, {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          })} | Helpful? {isUpvoted ? <span>Yes({answerHelpfullness})</span> : <a onClick={handleClick}>Yes({answerHelpfullness})</a>} | {isReported ? <span>Reported</span> : <a className={styles.link} onClick={HandleReported}>Report</a>}</span>
      </div>
    </div>
  );
};

export default AnswersListEntry;

