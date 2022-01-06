import axios from 'axios';
import React, { useState, Component } from "react";
import styles from './qa.module.css';

const ModalAnswers = ({showModal, setShowModal, question_id, closeModal}) => {
    const [values, setValues] = useState({
        answer: '',
        nickname: '',
        email: '',
        file: ''
    });


    const handleAnswerChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            answer: event.target.value,
        }));
    };

    const handleNicknameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            nickname: event.target.value,
        }));
    };

    const handleEmailChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`/api/questions/${question_id}/answers`, {
            body: values.answer,
            name: values.nickname,
            email: values.email
        })
        .then(() => {
            closeModal();
            setValues((values) => ({
                ...values,
                answer: '',
                nickname: '',
                email: '',
                file: ''
            }));
        })
        .catch((err) => console.log(err));
    }
    return (
        <>
        {showModal ? <div className={styles.modalmain} onClick={() => {closeModal()}}>
            <form onSubmit={handleSubmit} className={styles.modalContent} onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
                <p>
                <button className={styles.closeButton} onClick={closeModal}>X</button>
                </p>
                <p>
                    <label>Your Answer*:</label>
                    <input className={styles.formInput} placeholder="Your answer" maxLength="1000" name="answer" value={values.answer} onChange={handleAnswerChange} required></input>
                </p>
                    <br />
                <p>
                <label>Your Nickname*:</label>
                    <input className={styles.formInput} type="text" placeholder='Example: jack543!' maxLength="60" name="nickname" value={values.nickname} onChange={handleNicknameChange} required/>
                    </p>
                    <br />
                    <p>
                <label>Your Email*:</label>
                    <input className={styles.formInput} type="email" placeholder='Example: jack@email.com' maxLength="60" name="email" value={values.email} onChange={handleEmailChange} required/>
                    </p>
                    <p className={styles.answerInfo}>For authentication reasons, you will not be emailed</p>
                    <br />
                    <p>
                <label name="file" value={values.file}>Add photos:</label>
                    <input className={styles.formInput} type="file" /></p>
                    <br />
                <p>
                <button className={styles.modalButton}>Submit an Answer</button>
                </p>
            </form>
        </div> : null}
        </>

    )
}

export default ModalAnswers;




