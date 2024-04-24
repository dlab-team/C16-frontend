'use client'

import { AiOutlineUpload } from 'react-icons/ai';
import SearchRed from './components/searchRed/searchRed';
import Pagination from './components/pagination/Pagination';
import CardRed from './components/cardRed/cardRed';
import styles from "./styles/nuestraRed.module.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';



const NuestraRed = () => {
  const router = useRouter();
  const pathname = router.pathname;


  const navigateToNuestraRed = () => {
    router.push('/dashboard/red/postred'); // Ajusta la ruta según sea necesario
  };
  const navigateToFormRed = () => {
    router.push('/dashboard/red/formred'); // Ajusta la ruta según sea necesario
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

  

 const PruebaRed = [
    {
      id: 1,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Usuarios',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
      alt:"imagen-ronda"
    },
    {
      id: 2,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Ronda',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
      alt:"imagen-ronda"
    },
    {
      id: 3,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Ronda',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
      alt:"imagen-ronda"
    },
    {
      id: 4,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Ronda',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
      alt:"imagen-ronda"
    },
    {
      id: 5,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Ronda',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
      alt:"imagen-ronda"
    },
    {
      id: 6,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Ronda',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
      alt:"imagen-ronda"
    },
  ];
  return (
    <div className={styles.containerRed}>
    {showModal && (
        <div className={styles.modalBackground} onClick={handleCloseModal} style={{ backgroundColor: modalColor }} />
      )}

    
    <div className={styles.title}>
      <h1>Nuestra Red</h1>
      <button className={`${styles.iconform} ${pathname === '/dashboard/red/formred' && styles.active}`} onClick={navigateToFormRed}>
        <AiOutlineUpload/>
      </button>
    </div>
    
    <SearchRed />
    
    <div className={styles.seccionCard}>
      {PruebaRed.map((prueba) => (
        <CardRed 
          key={prueba.id}
          image={prueba.image}
          name={prueba.name}
          description={prueba.description}
          alt={prueba.alt}
          pathname={router.pathname}
          navigateToNuestraRed={navigateToNuestraRed}
          showModal={showModal}
          handleDelete={handleDelete}
          handleCloseModal={handleCloseModal}
        />
      ))}
    </div>
    
    {/* Renderizar el modal */}
  

    <div>
      <Pagination />
    </div>
  </div>
);
};


export default NuestraRed;