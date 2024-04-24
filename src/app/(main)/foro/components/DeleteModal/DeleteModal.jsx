import styles from './DeleteModal.module.css'

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null

    const handleDelete = () =>{
        onConfirm()
        onClose()
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <button className={styles.closeBtn} onClick={onClose}></button>
                </div>

                <div className={styles.modalInfo}>
                    <h3 className={styles.title}>Eliminar Comentario</h3>
                    <p className={styles.message}>Estás seguro que deseas reportar eliminar el comentario seleccionado?</p>
                </div>

                <div className={styles.modalActions}>
                    <button className={styles.closeButton} onClick={onClose}>Cancelar</button>
                    <button className={styles.reportButton} onClick={handleDelete}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal