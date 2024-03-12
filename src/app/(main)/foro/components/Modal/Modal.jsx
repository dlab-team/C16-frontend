
import styles from './Modal.module.css'

const Modal = ({ isOpen, onClose, children, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
                <div className={styles.modalActions}>
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={onConfirm}>Reportar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;