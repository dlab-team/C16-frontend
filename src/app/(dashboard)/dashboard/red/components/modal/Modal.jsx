import React from 'react'
import styles from "./syles/modal.module.css"
const Modal = ({handleCloseModal,handleDelete,modalColor, showModal}) => {

  return (

          <div className={styles.modalContainer} style={{ backgroundColor: modalColor }}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              X
            </button>
            <p>¿Estás seguro de que deseas eliminar este elemento?</p>
            <div className={styles.modalButtons}>
              <button className={styles.modalButtonscancel} onClick={handleCloseModal}>Cancelar</button>
              <button className={styles.modalButtonsconfirm} onClick={handleDelete}>Confirmar</button>
            </div>
          </div>
  
  )
}

export default Modal
