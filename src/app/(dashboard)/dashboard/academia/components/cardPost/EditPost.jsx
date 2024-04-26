'use client'

import { FiTrash } from 'react-icons/fi'

import styles from './styles/EditPost.module.css'
import Image from 'next/image'
import { AiOutlineUpload } from 'react-icons/ai'
import Modal from '../modal/Modal'

const EditPost = ({

  handleDelete,
  showModal,
  handleCloseModal,
  modalColor,
}) => {
  return (
    <div>
      <div className={styles.card}>

        {/* para editar imagen
        
        <div className={styles.image}>
          <label htmlFor="uploadimage">
            <Image
              width={177}
              height={177}
              src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FFrame%2039944.png?alt=media&token=ffb794c8-d454-4de6-a424-c5b7fa43f58b"
              alt=""
            />
          </label>

          <input type="file" id="uploadimage" className={styles.inpuUpload} />

          <div className={styles.iconimage}>
            <AiOutlineUpload />
          </div>

        </div> */}

        <div className={styles.cardBody}>
          <div className={styles.cardContent}>
            <div className={styles.textacademia}>
              <div className={styles.cardTextAsideTitle}>
                <p>Titulo</p>
              </div>

              <div className={styles.academiainput}>
                <input type="text" placeholder='Sorem ipsum dolor sit amet' />
              </div>
            </div>

            <div className={styles.textacademia}>
              <div className={styles.cardTextAsideTitle}>
                <p>descripcion</p>
              </div>

              <div className={styles.academiainput}>
                <input type="text" placeholder='Sorem ipsum dolor sit amet, consectetur adipiscing elit.' />
              </div>
            </div>

            <div className={styles.textacademia}>
              <div className={styles.cardTextAsideTitle}>
                <p>Autor</p>
              </div>

              <div className={styles.academiainput}>
                <input type="text" placeholder='Paola Duarte' />
              </div>
            </div>

            <div className={styles.textacademia}>
              <div className={styles.cardTextAsideTitle}>
                <p>URL</p>
              </div>

              <div className={styles.academiainput}>
                <input type="text" placeholder='http//: ' />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.icon}>
          <button className={styles.iconTrash} onClick={handleDelete}>
            <FiTrash />
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

export default EditPost
