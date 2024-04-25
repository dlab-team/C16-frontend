
"use client"

import { AiOutlineUpload } from 'react-icons/ai'

import EditPost from '../components/cardPost/EditPost';
import styles from "./styles/postacademia.module.css"
import { useState } from 'react';

import { useRouter } from 'next/navigation';

const postred = () => {

  const router = useRouter();
  const pathname = router.pathname;


  const navigateToFormAcademia= () => {
    router.push('/dashboard/academia/formacademia'); // Ajusta la ruta según sea necesario
  };
  const [showModal, setShowModal] = useState(false);

  const [modalColor, setModalColor] = useState('#ffffff'); // Color inicial del modal

  const handleDelete = () => {
    setShowModal(true);
    setModalColor('#0000'); // Cambiar el color del modal al activar la función
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalColor('#ffffff'); // Resetear el color del modal al cerrarlo
  };

 

  return (
    <div className={styles.containerRed}>
     {showModal && (
        <div className={styles.modalBackground} onClick={handleCloseModal} style={{ backgroundColor: modalColor }} />
      )}

<div className={styles.title}>
      <h1>Recursos de Academia</h1>
      <button className={`${styles.iconform} ${pathname === '/dashboard/academia/formacademia' && styles.active}`} onClick={navigateToFormAcademia}>
        <AiOutlineUpload/>
      </button>
    </div>

      <div className={styles.seccionCard}>
     <EditPost 
     showModal={showModal}
     handleDelete={handleDelete}
     handleCloseModal={handleCloseModal}
     modalColor={modalColor}

     />
     </div>
      <div >
    <button className={styles.buttonsave}> Guardar Cambios</button>
      </div>
    </div>
  );
};

export default postred;
