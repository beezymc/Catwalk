import React, { useState } from 'react';
import ModalAnswers from './modalAnswers.jsx';
import styles from './qa.module.css';

const QuestionItem = ({ questionInfo }) => {
  const [questionHelpfullness, setquestionHelpfullness] = useState(questionInfo.question_helpfulness);
  const [isUpvoted, setUpvoted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setquestionHelpfullness(questionHelpfullness + 1);
    setUpvoted(true);
  };

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.questionContainer}>
      <div className={styles.question}><b>Q: {questionInfo.question_body}</b></div>
      <div>
        <span className={styles.link}>Helpful? {isUpvoted ? <span>Yes({questionHelpfullness})</span> : <a onClick={handleClick}>Yes({questionHelpfullness})</a>}</span>
        <span className={styles.link}>|</span>
        <span>
          <a onClick={openModal} className={styles.link}>Add Answer</a>
          <ModalAnswers showModal={showModal} setShowModal={setShowModal} question_id={questionInfo.question_id} closeModal={closeModal}/>
        </span>
      </div>
    </div>
  );
}

export default QuestionItem;