import axios from 'axios';
import React, { useState, Component } from "react";
import styles from './qa.module.css';

const ModalAnswers = ({showModal, setShowModal, question_id}) => {
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
        .then(() => console.log("answer data sent"))
        .catch((err) => console.log(err));
    }
    return (
        <>
        {showModal ? <div className={styles.modalmain}>
            <form onSubmit={handleSubmit} className={styles.modalContent}>
                <p>
                    <label>Your Answer*:</label>
                    <input className={styles.formInput} maxLength="1000" name="answer" value={values.answer} onChange={handleAnswerChange} required></input>
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




