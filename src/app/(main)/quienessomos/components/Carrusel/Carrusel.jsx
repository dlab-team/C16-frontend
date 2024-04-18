import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carrusel.module.css';

// Asegúrate de tener la fuente Montserrat importada en tu proyecto
// Puedes agregarla en tu archivo HTML o CSS

const Carrusel = ({ imagenes }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
    };

    return (
        <div style={{ marginBottom: '500px' }}> 
            <h2 className={styles.tituloRed}>Nuestra Red</h2>
            <div className={styles.carruselUno}>
                <Slider {...settings}>
                    {imagenes.map((imagen, index) => (
                        <div key={index} className={styles.carruselItem}>
                            <a href={imagen.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <img src={imagen.src} alt={imagen.alt} className={styles.imagenCarrusel} />
                                <p className={styles.nombreOrganizacion}>{imagen.nombre}</p>
                                <p className={styles.descripcionCarrusel}>{imagen.descripcion}</p>
                            </a>
                        </div>
                    ))}
                </Slider>
               </div>
            </div>
            );
};

            // Datos de ejemplo para las imágenes del carrusel
            export const imagenesDeEjemplo = [
            {src: '/assets/images/banner/enacionaldecuidado.png', alt: 'Imagen 1', url: 'http://direccion1.com', nombre: 'RNCuidadoras' },
            {src: '/assets/images/banner/enacionaldecuidado.png', alt: 'Imagen 1', url: 'http://direccion1.com', nombre: 'RNCuidadoras' },
            {src: '/assets/images/banner/enacionaldecuidado.png', alt: 'Imagen 1', url: 'http://direccion1.com', nombre: 'RNCuidadoras' },
            {src: '/assets/images/banner/enacionaldecuidado.png', alt: 'Imagen 1', url: 'http://direccion1.com', nombre: 'RNCuidadoras' },
            {src: '/assets/images/banner/enacionaldecuidado.png', alt: 'Imagen 1', url: 'http://direccion1.com', nombre: 'RNCuidadoras' },
            // ... más imágenes con sus respectivos nombres y descripciones
            ];

            export default function App() {
    return <Carrusel imagenes={imagenesDeEjemplo} />;
}
