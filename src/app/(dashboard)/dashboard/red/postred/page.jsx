
"use client"

import { AiOutlineUpload, AiTwotoneEdit } from 'react-icons/ai'

import CardPost from '../components/cardPost/CardPost';
import styles from "./styles/postred.module.css"
import { useState } from 'react';


const postred = () => {

  const [showModal, setShowModal] = useState(false);

  const [modalColor, setModalColor] = useState('#ffffff'); // Color inicial del modal

  const handleDelete = () => {
    setShowModal(true);
    setModalColor('#0000'); // Cambiar el color del modal al activar la función
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalColor('#ffffff'); // Resetear el color del modal al cerrarlo
  };

 

  return (
    <div className={styles.containerRed}>
      {showModal && (
        <div className={styles.modalBackground} onClick={handleCloseModal} style={{ backgroundColor: modalColor }} />
      )}
      <div className={styles.title}>
        <h1>Nuestra Red </h1>
        <AiOutlineUpload />
      </div>
      <div className={styles.seccionCard}>
     <CardPost
     showModal={showModal}
     handleDelete={handleDelete}
     handleCloseModal={handleCloseModal}
     modalColor={modalColor}
     />
     </div>
      <div >
    <button className={styles.buttonsave}> Guardar Cambios</button>
      </div>
    </div>
  );
};

export default postred;
