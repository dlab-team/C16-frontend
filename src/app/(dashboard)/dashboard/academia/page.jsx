'use client'

import { AiOutlineUpload } from 'react-icons/ai';
import SearchAcademia from './components/searchAcademia/searchAcademia';
import Pagination from './components/pagination/Pagination';
import styles from './styles/academia.module.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CardAcademia from './components/cardAcademia/CardAcademia';



const Academia = () => {

  
  const router = useRouter();
  const pathname = router.pathname;


  const navigateToEditAcademia = () => {
    router.push('/dashboard/academia/postacademia'); // Ajusta la ruta según sea necesario
  };
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

  

 const PruebaAcademia= [
    {
      id: 1,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FFrame%2039944.png?alt=media&token=ffb794c8-d454-4de6-a424-c5b7fa43f58b",
      title: 'Usuarios',
      description:" Borem ipsum dolor sit amet",
      autor: "Paola Duarte",
      url: "http//:",
      alt:"imagen-ronda"
    },
    {
      id: 2,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FFrame%2039944.png?alt=media&token=ffb794c8-d454-4de6-a424-c5b7fa43f58b",
      title: 'Sorem ipsum dolor sit amet',
      description:" Borem ipsum dolor sit amet",
      autor: "Paola Duarte",
      url: "http//:",
      alt:"imagen-ronda"
    },
    {
      id: 3,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FFrame%2039944.png?alt=media&token=ffb794c8-d454-4de6-a424-c5b7fa43f58b",
      title: 'Sorem ipsum dolor sit amet',
      description:" Borem ipsum dolor sit amet",
      autor: "Paola Duarte",
      url: "http//:",
      alt:"imagen-ronda"
    },
    {
      id: 4,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FFrame%2039944.png?alt=media&token=ffb794c8-d454-4de6-a424-c5b7fa43f58b",
      title: 'Sorem ipsum dolor sit amet',
      description:" Borem ipsum dolor sit amet",
      autor: "Paola Duarte",
      url: "http//:",
      alt:"imagen-ronda"
    },
    {
      id: 5,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FFrame%2039944.png?alt=media&token=ffb794c8-d454-4de6-a424-c5b7fa43f58b",
      title: 'Sorem ipsum dolor sit amet',
      description:" Borem ipsum dolor sit amet",
      autor: "Paola Duarte",
      url: "http//:",
      alt:"imagen-ronda"
    },
    {
      id: 6,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FFrame%2039944.png?alt=media&token=ffb794c8-d454-4de6-a424-c5b7fa43f58b",
      title: 'Sorem ipsum dolor sit amet',
      description:" Borem ipsum dolor sit amet",
      autor: "Paola Duarte",
      url: "http//:",
      alt:"imagen-ronda"
    },
  ];
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
    
    <SearchAcademia/>
    
    <div className={styles.seccionCard}>
      {PruebaAcademia.map((prueba) => (
        <CardAcademia
          key={prueba.id}
          image={prueba.image}
          title={prueba.title}
          description={prueba.description}
          alt={prueba.alt}
          autor = {prueba.autor}
          url = {prueba.url}
          pathname={router.pathname}
          navigateToEditAcademia={navigateToEditAcademia}
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


export default Academia;
