'use client'
import { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { AiTwotoneEdit } from 'react-icons/ai';
import styles from './styles/cardRed.module.css';
import Image from 'next/image';

const CardRed = ({ image, name, description }) => {

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    // Aquí puedes añadir la lógica para eliminar el elemento
    // Por ahora, solo mostraremos la modal
    setShowModal(true);
    
  };

  console.log( "hola " + handleDelete)
  const handleCloseModal = () => {
    setShowModal(false);
  };
console.log("close modal" + handleCloseModal)
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image width={177} height={177} src={image} className={styles.profileImage} />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <div className={styles.cardTextTop}>
                <div className={styles.cardTextAside}>
                  <p>Nombre</p>
                </div>
                <div className={styles.cardText}>
                  <p>Descripción</p>
                </div>
              </div>
            </div>

            <div className={styles.cardTitle}>
              <div className={styles.cardTextAside}>
                <p>{name}</p>
              </div>
              <div className={styles.cardText}>
                <p className={styles.cardTextDescription}>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.icon}>
          <button className={styles.iconTrash} onClick={handleDelete}>
            <FiTrash />
          </button>
          <button
           className={styles.iconEdit}
            // className={`${styles.iconEdit} ${pathname === '/dashboard/red/PostRed' && styles.active}`}
            // onClick={() => router.push('/dashboard/red/PostRed')}
          >
            <AiTwotoneEdit />
          </button>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              X
            </button>
            <p>¿Estás seguro de que deseas eliminar este elemento?</p>
            <div className={styles.modalButtons}>
              <button onClick={handleCloseModal}>Cancelar</button>
              <button onClick={handleDelete}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardRed;
