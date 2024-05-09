import { UserContext } from '@/components/context/userContext'
import { useContext } from 'react'
import styles from './syles/modal.module.css'
import { deleteVideo } from '@/services/api/api.academy.service.js'
import { errorMessage, successMessage } from '@/utils/notify'

const Modal = ({ handleCloseModal, handleDelete, modalColor, id }) => {
  const { user } = useContext(UserContext)
  const idToken = user.token

  const handleConfirm = async () => {
    await deleteVideo(id, idToken)
      .then(() => {
        successMessage('Video eliminado exitosamente')
        handleCloseModal()
      })
      .catch(() => {
        errorMessage('Error al eliminar el video')
        handleCloseModal()
      })
  }

  return (
    <div
      className={styles.modalContainer}
      style={{ backgroundColor: modalColor }}
    >
      <button className={styles.closeButton} onClick={handleCloseModal}>
        X
      </button>
      <p>¿Estás seguro de que deseas eliminar este elemento?</p>
      <div className={styles.modalButtons}>
        <button
          className={styles.modalButtonscancel}
          onClick={handleCloseModal}
        >
          Cancelar
        </button>
        <button className={styles.modalButtonsconfirm} onClick={handleConfirm}>
          Confirmar
        </button>
      </div>
    </div>
  )
}

export default Modal
