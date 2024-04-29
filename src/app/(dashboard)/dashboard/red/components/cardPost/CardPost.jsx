'use client'

import { FiTrash } from 'react-icons/fi';

import styles from './styles/cardRed.module.css';
import Image from 'next/image';
import { AiOutlineUpload } from 'react-icons/ai';
import Modal from '../modal/Modal';

const CardPost = ({ name, description,handleDelete ,showModal,handleCloseModal,modalColor}) => {





  return (
    <div>
      <div className={styles.card}>
        <div className={styles.image}>
        
          <label htmlFor="uploadimage">
              <Image width={177} height={177} src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5" className={styles.profileImage}  alt=''/>
              </label>

          <input type="file" id='uploadimage' className={styles.inpuUpload}/>
          <div className={styles.iconimage}>
          <AiOutlineUpload />
          </div>
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
                <input placeholder='Ronda' type="text" value={name} className={styles.inputname}/>
              
              </div>
              <div className={styles.cardText}>
             
                  <input placeholder='Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus' type="text"className={styles.cardTextDescription} value={description}  />
              
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
  );
};

export default CardPost;
