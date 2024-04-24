'use client'
import { useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import { AiTwotoneEdit } from 'react-icons/ai'
import styles  from './styles/cardAcademia.module.css'
import Image from 'next/image'
import Modal from '../modal/Modal'

const CardAcademia = ({
  image,
  title,
  autor,
  url,
  description,
  alt,
  navigateToEditAcademia,
  pathname,
  handleDelete,
  handleCloseModal,
  modalColor,
  showModal,
}) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            width={177}
            height={177}
            src={image}
            className={styles.profileImage}
            alt={alt}
          />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardContent}>
            <div className={styles.textacademia}>
              <div className={styles.cardTextAsideTitle}>
                <p>Titulo</p>
              </div>

              <div>{title}</div>
            </div>

            <div className={styles.textacademia}>
              <div className={styles.cardTextAsideTitle}>
                <p>descripcion</p>
              </div>

              <div>{description}</div>
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

              <div>{url}</div>
            </div>
          </div>
        </div>
        <div className={styles.icon}>
          <button className={styles.iconTrash} onClick={handleDelete}>
            <FiTrash />
          </button>
          <button
            className={`${styles.iconEdit} ${pathname === '/dashboard/academia/postacademia' && styles.active}`}
            onClick={navigateToEditAcademia}
          >
            <AiTwotoneEdit />
          </button>
        </div>
      </div>

      {showModal && (
        <Modal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleDelete={handleDelete}
          modalColor={modalColor} // Pasa el color del modal como prop
        />
      )}
    </div>
  )
}

export default CardAcademia
