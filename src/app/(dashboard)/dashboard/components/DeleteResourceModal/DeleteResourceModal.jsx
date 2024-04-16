import styles from './styles/DeleteResource.module.css'

const DeleteResourceModal = ({ dialogIsOpen, setDialogIsOpen }) => {
  return (
    <dialog id="deleteResource" className={styles.container}>
      <div className={styles.wrapper}>
        <button
          autofocus
          onClick={() => setDialogIsOpen(!dialogIsOpen)}
          className={styles.closeButton}
        >
          X
        </button>
        <h5 className={styles.message}>
          ¿Estás seguro que deseas eliminar este recurso?
        </h5>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => setDialogIsOpen(!dialogIsOpen)}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
          <button className={styles.deleteButton}>Eliminar</button>
        </div>
      </div>
    </dialog>
  )
}

export default DeleteResourceModal
