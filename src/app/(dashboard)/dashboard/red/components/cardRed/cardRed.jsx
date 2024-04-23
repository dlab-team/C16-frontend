'use client'
import { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { AiTwotoneEdit } from 'react-icons/ai';
import styles from './styles/cardRed.module.css';
import Image from 'next/image';
import Modal from '../modal/Modal';


const CardRed = ({ image, name, description, alt,navigateToNuestraRed, pathname,handleDelete,handleCloseModal,modalColor,showModal}) => {

 

  return (
    <div>
      <div className={styles.card}>
            


        <div className={styles.image}>
          <Image width={177} height={177} src={image} className={styles.profileImage} alt={alt} />
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
        className={`${styles.iconEdit} ${pathname === '/dashboard/red/postred' && styles.active}`}
        onClick={navigateToNuestraRed}  >
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
  );
};

export default CardRed;
