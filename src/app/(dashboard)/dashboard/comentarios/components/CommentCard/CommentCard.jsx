'use client'
import { useState } from 'react'
import { AiOutlineSave, AiOutlineEye } from 'react-icons/ai'
import styles from './styles/CommentCard.module.css'
import ReportModal from '../Modal/ReportModal'

const CommentCard = ({
  comment,
  author,
  reporter,
  id,
  number,
  refetchData,
}) => {
  const [dialogRejectIsOpen, setDialogRejectIsOpen] = useState(false)
  const [dialogAcceptIsOpen, setDialogAcceptIsOpen] = useState(false)

  return (
    <div className={styles.container} key={id}>
      <div className={styles.firstWrapper}>
        <h5 className={styles.title}>Comentario</h5>
        <span className={styles.comment}>{comment}</span>
      </div>
      <div className={styles.secondWrapper}>
        <h5 className={styles.title}>Autor</h5>
        <p className={styles.text}>
          {author?.firstname + ' ' + author?.lastname}
        </p>
      </div>
      <div className={styles.secondWrapper}>
        <h5 className={styles.title}>Quién reporta</h5>
        <p className={styles.text}>
          {reporter?.firstname + ' ' + reporter?.lastname}
        </p>
      </div>
      <div className={styles.secondWrapper}>
        <h5 className={styles.title}>Acciones</h5>
        <div className={styles.buttonsWrapper}>
          <button
            className={styles.button}
            onClick={() => setDialogRejectIsOpen(!dialogRejectIsOpen)}
          >
            <AiOutlineSave size={24} />
          </button>
          <button
            className={styles.button}
            onClick={() => setDialogAcceptIsOpen(!dialogAcceptIsOpen)}
          >
            <AiOutlineEye size={24} />
          </button>
        </div>
        <p className={styles.text}># de reportes {number}</p>
      </div>
      {dialogRejectIsOpen && (
        <ReportModal
          dialogIsOpen={dialogRejectIsOpen}
          setDialogIsOpen={setDialogRejectIsOpen}
          reportId={id}
          refetchData={refetchData}
          actionType="reject"
        />
      )}
      {dialogAcceptIsOpen && (
        <ReportModal
          dialogIsOpen={dialogAcceptIsOpen}
          setDialogIsOpen={setDialogAcceptIsOpen}
          reportId={id}
          refetchData={refetchData}
          actionType="accept"
        />
      )}
    </div>
  )
}

export default CommentCard
