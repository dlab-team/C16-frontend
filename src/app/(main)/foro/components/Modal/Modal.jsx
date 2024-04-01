
import styles from './Modal.module.css'

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <button className={styles.closeBtn} onClick={onClose}></button>
                </div>

                <div className={styles.modalInfo}>
                    <h3 className={styles.title}>Reportar como inapropiado?</h3>
                    <p className={styles.message}>Estás seguro que deseas reportar este comentario como inapropiado?</p>
                </div>

                <div className={styles.modalActions}>
                    <button className={styles.closeButton} onClick={onClose}>Cancelar</button>
                    <button className={styles.reportButton} onClick={onConfirm}>Reportar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;