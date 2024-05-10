'use client'
import { useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import { AiTwotoneEdit } from 'react-icons/ai'
import styles from './styles/cardAcademia.module.css'
import Modal from '../modal/Modal'

const CardAcademia = ({
  id,
  title,
  autor,
  url,
  description,
  duration,
  navigateToEditAcademia,
  pathname,
  refetchData,
}) => {
  const [selectedId, setSelectedId] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleDelete = (id) => {
    setSelectedId(id)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    refetchData()
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <div className={styles.cardContent}>
            <div className={styles.textacademia}>
              <div className={styles.cardTextAsideTitle}>
                <p>Título</p>
              </div>

              <div className={styles.cardtitletext}>{title}</div>
            </div>

            <div className={styles.textacademia}>
              <div className={styles.cardTextAsideTitle}>
                <p>Descripción</p>
              </div>

              <div className={styles.carsdecriptiontext}>{description}</div>
            </div>

            <div className={styles.textacademia}>
              <div className={styles.cardTextAsideTitle}>
                <p>Autor</p>
              </div>

              <div>{autor}</div>
            </div>

            <div className={styles.textacademia}>
              <div className={styles.cardTextAsideTitle}>
                <p>URL</p>
              </div>

              <div>
                <a
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.academialink}
                >
                  Ver Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.icon}>
          <button
            className={`${styles.iconEdit} ${pathname === '/dashboard/academia/postacademia' && styles.active}`}
            onClick={() => navigateToEditAcademia(id)}
          >
            <AiTwotoneEdit />
          </button>
          <button className={styles.iconTrash} onClick={() => handleDelete(id)}>
            <FiTrash />
          </button>
        </div>
      </div>

      {showModal && (
        <Modal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleDelete={handleDelete}
          modalColor="rgba(255, 0, 0, 0.5)"
          id={selectedId}
        />
      )}
    </div>
  )
}

export default CardAcademia
