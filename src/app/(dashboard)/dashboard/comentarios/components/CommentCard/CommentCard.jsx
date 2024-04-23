'use client'
import { useState } from 'react'
import { AiOutlineSave, AiOutlineEye } from 'react-icons/ai'
import styles from './styles/CommentCard.module.css'
import { DeleteResourceModal } from '../../../components'

const CommentCard = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.firstWrapper}>
        <h5 className={styles.title}>Comentario</h5>
        <span className={styles.comment}>
          Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus
        </span>
      </div>
      <div className={styles.secondWrapper}>
        <h5 className={styles.title}>Autor</h5>
        <p className={styles.text}>Sorem ipsum dolor sit amet</p>
      </div>
      <div className={styles.secondWrapper}>
        <h5 className={styles.title}>Quién reporta</h5>
        <p className={styles.text}>Sorem ipsum dolor sit amet</p>
      </div>
      <div className={styles.secondWrapper}>
        <h5 className={styles.title}>Acciones</h5>
        <div className={styles.buttonsWrapper}>
          <button
            className={styles.button}
            onClick={() => setDialogIsOpen(!dialogIsOpen)}
          >
            <AiOutlineSave size={24} />
          </button>
          <button
            className={styles.button}
            onClick={() => setDialogIsOpen(!dialogIsOpen)}
          >
            <AiOutlineEye size={24} />
          </button>
        </div>
        <p className={styles.text}># de reportes 3</p>
      </div>
      {dialogIsOpen && (
        <DeleteResourceModal
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
        />
      )}
    </div>
  )
}

export default CommentCard
