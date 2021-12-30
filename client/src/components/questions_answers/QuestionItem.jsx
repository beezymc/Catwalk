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

  return (
    <div >
      <p>Q: {questionInfo.question_body}</p>
      <div>
        <span>Helpful? {isUpvoted ? <span>Yes({questionHelpfullness})</span> : <button onClick={handleClick}>Yes({questionHelpfullness})</button>}</span>
        <span> |  </span>
        <span>
          <button onClick={openModal}>Add Answer</button>
          <ModalAnswers showModal={showModal} setShowModal={setShowModal} question_id={questionInfo.question_id}/>
        </span>
      </div>
    </div>
  );
}

export default QuestionItem;