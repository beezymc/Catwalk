import React, { useState } from 'react';
import ModalQuestions from './ModalQuestions.jsx';
import styles from './qa.module.css';

const FormBar = ({ productId }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div>
      <span>
        <button className={styles.borderBtn} onClick={openModal}>Add a question +</button>
        <ModalQuestions showModal={showModal} setShowModal={setShowModal} productId={productId}/>
      </span>
    </div>
  );
};

export default FormBar;
