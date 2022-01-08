import React, { useState } from 'react';
import axios from 'axios';
import styles from './qa.module.css';

const ModalPhotos = ({showModal, setShowModal, productId, closeModal, modalPhoto, setModalPhoto}) => {
  console.log(modalPhoto)
    return (
        <>
            {showModal ? <div className={styles.modalmain} onClick={() => {closeModal()}}>
              <div onClick={e => { e.stopPropagation();}}> <span><img src={modalPhoto} className={styles.modalPhoto}/></span> </div >
            </div> : null}
        </>
    )
}

export default ModalPhotos;