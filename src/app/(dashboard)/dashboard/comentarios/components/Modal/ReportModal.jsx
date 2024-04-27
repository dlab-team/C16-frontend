import React, { useContext } from 'react'
import styles from './styles/ReportModal.module.css'
import { updateReport, deleteReport } from '@/services/api/api.report.service'
import { UserContext } from '@/components/context/userContext'

const ReportModal = ({
  reportId,
  dialogIsOpen,
  setDialogIsOpen,
  refetchData,
  actionType,
}) => {
  const { user } = useContext(UserContext)
  const idToken = user.token

  const handleAction = async () => {
    try {
      if (actionType === 'accept') {
        await updateReport(reportId, true, idToken)
      } else if (actionType === 'reject') {
        await updateReport(reportId, false, idToken)
      } else if (actionType === 'delete') {
        await deleteReport(reportId, idToken)
      }
      refetchData()
      setDialogIsOpen(false)
    } catch (error) {
      console.error('Ha habido un error:', error)
      setDialogIsOpen(false)
    }
  }

  let message, buttonText
  if (actionType === 'accept') {
    message =
      '¿Estás seguro que deseas <strong>Ocultar</strong> este comentario?'
    buttonText = 'Aceptar'
  } else if (actionType === 'reject') {
    message =
      '¿Estás seguro que deseas <strong>Desestimar</strong> este reporte?'
    buttonText = 'Aceptar'
  } else if (actionType === 'delete') {
    message = '¿Estás seguro que deseas <strong>Eliminar</strong> este reporte?'
    buttonText = 'Eliminar'
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

export default ReportModal
