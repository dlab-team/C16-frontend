import styles from './styles/CommentsDataTable.module.css'
import { AiOutlineDelete, AiOutlineSave, AiOutlineEye } from 'react-icons/ai'
import ReportModal from '../Modal/ReportModal'
import { useState } from 'react'

const CommentsDataTable = ({ reports, refetchData, tipo }) => {
  const [activeModal, setActiveModal] = useState({ type: null, reportId: null })

  const openModal = (type, reportId) => {
    setActiveModal({ type, reportId })
  }

  const closeModal = () => {
    setActiveModal({ type: null, reportId: null })
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Comentario</th>
          <th className={styles.th}>Autor</th>
          <th className={styles.th}>Administrador</th>
          <th className={styles.th}>Fecha</th>
          <th className={styles.th}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {reports?.map((report) => (
          <tr key={report.id}>
            <td className={styles.td}>
              <div className={styles.leftCell}>
                <p className={styles.span}>{report.content}</p>
              </div>
            </td>
            <td className={styles.td}>
              <div className={styles.cell}>
                <p className={styles.p}>
                  {report.PostAuthor.firstname +
                    ' ' +
                    report.PostAuthor.lastname}
                </p>
              </div>
            </td>
            <td className={styles.td}>
              <div className={styles.cell}>
                <p className={styles.p}>
                  {report.ReportAuthor.firstname +
                    ' ' +
                    report.ReportAuthor.lastname}
                </p>
              </div>
            </td>
            <td className={styles.td}>
              <div className={styles.cell}>
                <p className={styles.p}>
                  {new Date(report.createdAt).toLocaleDateString('es-CL')}
                </p>
              </div>
            </td>
            <td className={styles.td}>
              <div className={styles.rightCell}>
                <div className={styles.buttonsWrapper}>
                  <button
                    className={styles.button}
                    onClick={() => openModal('delete', report.id)}
                  >
                    <AiOutlineDelete size={24} />
                  </button>
                  {tipo === 'desestimados' && (
                    <button
                      className={styles.button}
                      onClick={() => openModal('accept', report.id)}
                    >
                      <AiOutlineEye size={24} />
                    </button>
                  )}
                  {tipo === 'ocultos' && (
                    <button
                      className={styles.button}
                      onClick={() => openModal('reject', report.id)}
                    >
                      <AiOutlineSave size={24} />
                    </button>
                  )}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      {activeModal.type === 'delete' && (
        <ReportModal
          dialogIsOpen={true}
          setDialogIsOpen={closeModal}
          reportId={activeModal.reportId}
          refetchData={refetchData}
          actionType="delete"
        />
      )}
      {activeModal.type === 'accept' && (
        <ReportModal
          dialogIsOpen={true}
          setDialogIsOpen={closeModal}
          reportId={activeModal.reportId}
          refetchData={refetchData}
          actionType="accept"
        />
      )}
      {activeModal.type === 'reject' && (
        <ReportModal
          dialogIsOpen={true}
          setDialogIsOpen={closeModal}
          reportId={activeModal.reportId}
          refetchData={refetchData}
          actionType="reject"
        />
      )}
    </table>
  )
}

export default CommentsDataTable
