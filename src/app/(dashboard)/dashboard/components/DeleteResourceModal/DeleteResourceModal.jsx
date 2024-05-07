'use client'
import styles from './styles/DeleteResource.module.css'
import { UserContext } from '@/components/context/userContext'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
const DeleteResourceModal = ({
  dialogIsOpen,
  setDialogIsOpen,
  message,
  cancelButtonText,
  okButtontext,
  isLoading,
}) => {
  const {deleteUser} = useContext(UserContext)
  const router = useRouter()

  const handleDelete =()=>{
    deleteUser()
    router.push('/')
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
        <h5 className={styles.message}>{message}</h5>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => setDialogIsOpen(!dialogIsOpen)}
            className={styles.cancelButton}
          >
            {cancelButtonText}
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => {
              handleDelete()
              setDialogIsOpen(!dialogIsOpen)
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Cargando...' : okButtontext}
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default DeleteResourceModal
