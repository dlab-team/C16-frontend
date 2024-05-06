
import styles from './Modal.module.css'

const Modal = ({ isOpen, onClose, info }) => {
    const {title, message, urlRedirect} = info
    if (!isOpen) return null;
    
    const handleContinue = () =>{
        onClose()
    }
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalInfo}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.message}>{message}</p>
                </div>

                <a className={styles.modalActions} href={urlRedirect}>
                    <button className={styles.reportButton} onClick={handleContinue}>Continuar</button>
                </a>
                
            </div>
        </div>
    )
}

export default Modal