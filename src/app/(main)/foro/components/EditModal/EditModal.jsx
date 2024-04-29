import React, { useState } from 'react'
import PostImage from '../PostImage/PostImage';

import styles from './EditModal.module.css'

function EditModal({ isOpen, onClose, onConfirm, userImage, message }) {
    if (!isOpen) return null;

    const [newText, setNewText] = useState(message); // Inicializa el estado con el mensaje existente
    
    const handleSave =()=>{
        onConfirm(newText)
        onClose()
    }


    return (
        <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.headerEdit}>
                <PostImage
                    width={100}
                    height={100}
                    className={styles.imageHeader}
                    src={userImage || "https://firebasestorage.googleapis.com/v0/b/dropbox-clone-736fa.appspot.com/o/users%2Fuser_2aNC9F2HWDn5x5KjMBi9Y9ywEQX%2Ffiles%2Fdefaultprofile.png?alt=media"}
                    alt='imagen de usuario'
                />
                <button className={styles.closeBtn} onClick={onClose}></button>
            </div>

            <textarea 
            className={styles.textArea}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            >

            </textarea>

            <div className={styles.modalActions}>
                <button className={styles.closeButton} onClick={onClose}>Cancelar</button>
                <button className={styles.reportButton} onClick={handleSave}>Guardar</button>
            </div>
        </div>
    </div>
    )
}

export default EditModal
