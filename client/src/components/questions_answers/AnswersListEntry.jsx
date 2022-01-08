import React, { useState } from 'react';
import styles from './qa.module.css';
import axios from 'axios';
import ModalPhotos from './ModalPhotos.jsx'

const AnswersListEntry = ({ answer }) => {
  const [answerHelpfullness, setanswerHelpfullness] = useState(answer.helpfulness);
  const [isUpvoted, setUpvoted] = useState(false);
  const [isReported, setReported] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState('')
  const photos = answer.photos;

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

  const openModal = (url) => {
  if (url) {
    setModalPhoto(url);
  }

      setShowModal(prev => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div >
      <div className={styles.answer}> <span className={styles.question}>A:</span> {answer.body}</div>
      <div>{photos && photos.length > 0 ? photos.map(item => <img src={item.url} onClick={() => {openModal(item.url)}} width="100" height="100" className={styles.answerImg} />) : null}</div>
      <ModalPhotos showModal={showModal} setShowModal={setShowModal} closeModal={closeModal} modalPhoto={modalPhoto} modalPhoto={modalPhoto}/>
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

