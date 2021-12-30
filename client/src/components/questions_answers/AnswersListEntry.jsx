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
    axios.put(`/api/answers/${answer.id}/helpful`, {helpfulness: answerHelpfullness})
      .then((response) => {
        console.log('answer.id: ', answer.id);
        console.log('answerHelpfullness ', answerHelpfullness.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HandleReported = () => {
    setReported(true);
  };

  return (
    <div >
      <div>A: {answer.body}</div>
      <br/>
      <div>
        <span>by {answer.answerer_name},
          {new Date(answer.date).toLocaleDateString(undefined, {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          })}</span>
        <span> | </span>
        <span> Helpful? {isUpvoted ? <span>Yes({answerHelpfullness})</span> : <button onClick={handleClick}>Yes({answerHelpfullness})</button>}</span>
        <span> | </span>
        <span>{isReported ? <span>Reported</span> : <button onClick={HandleReported}>Report</button>}</span>
      </div>
    </div>
  );
};

export default AnswersListEntry;

