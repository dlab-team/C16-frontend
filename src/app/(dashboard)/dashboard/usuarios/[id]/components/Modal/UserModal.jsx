import { useContext } from 'react'
import styles from './styles/UserModal.module.css'
import { deleteUser, disableUser } from '@/services/api/api.user.service.js'
import { UserContext } from '@/components/context/userContext'
import { useRouter } from 'next/navigation'

const UserModal = ({
  userId,
  dialogIsOpen,
  setDialogIsOpen,
  actionType,
  enabled,
  refetchUser,
}) => {
  const { user } = useContext(UserContext)
  const idToken = user.token
  const enabledValue = enabled
  const router = useRouter()

  const handleAction = async () => {
    try {
      if (actionType === 'delete') {
        await deleteUser(userId, idToken);
        router.push('/dashboard/usuarios')
      } else if (actionType === 'disable') {
        await disableUser(userId, idToken, !enabledValue)
        refetchUser()
        setDialogIsOpen(false)
      }
    } catch (error) {
      console.error('Ha habido un error:', error)
      setDialogIsOpen(false)
    }
  }

  let message, buttonText
  if (actionType === 'delete') {
    message = '¿Estás seguro que deseas <strong>Eliminar</strong> este usuario?'
    buttonText = 'Aceptar'
  } else if (actionType === 'disable') {
    message = `¿Estás seguro que deseas <strong>${!enabledValue ? 'habilitar' : 'deshabilitar'}</strong> este usuario?`
    buttonText = 'Aceptar'
  }

  return (
    <dialog id="deleteResource" className={styles.container}>
      <div className={styles.wrapper}>
        <button
          autoFocus
          onClick={() => setDialogIsOpen(!dialogIsOpen)}
          className={styles.closeButton}
        >
          X
        </button>
        <h5
          className={styles.message}
          dangerouslySetInnerHTML={{ __html: message }}
        ></h5>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => setDialogIsOpen(!dialogIsOpen)}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
          <button onClick={handleAction} className={styles.deleteButton}>
            {buttonText}
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default UserModal
