import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carrusel.module.css';

const Carrusel = ({ imagenes }) => {
    // Configuración para el carrusel
    const settings = {
        dots: true, // Muestra puntos de navegación en la parte inferior
        infinite: true, // Permite que el carrusel sea infinito
        speed: 2000, // Velocidad de transición entre imágenes
        slidesToShow: 5, // Número de imágenes a mostrar a la vez
        slidesToScroll: 1, // Número de imágenes a desplazar en cada movimiento
        autoplay: true, // Activa el desplazamiento automático
        autoplaySpeed: 1000, // Intervalo de tiempo para el desplazamiento automático
        pauseOnHover: true, // Pausa el carrusel cuando el mouse está encima
    };

    return (
        <div className='carruselUno'>
            <h2 className="titulo-carrusel">Nuestra Red</h2> {/* Título agregado */}
            <Slider {...settings}>
                {imagenes.map((imagen, index) => (
                    <div key={index} className={styles.carruselItem}>
                        <a href={imagen.url} target="_blank" rel="noopener noreferrer">
                            <img src={imagen.src} alt={imagen.alt} className={styles.imagenCarrusel} />
                            <p className={styles.descripcionCarrusel}>{imagen.descripcion}</p>
                        </a>
                    </div>
                ))}
            </Slider>

                
            <Slider {...settings}>
                {imagenes.map((imagen, index) => (
                    <div key={index} className={styles.carruselItem}>
                        <a href={imagen.url} target="_blank" rel="noopener noreferrer">
                            <img src={imagen.src} alt={imagen.alt} className={styles.imagenCarrusel} />
                            <p className={styles.descripcionCarrusel}>{imagen.descripcion}</p>
                        </a>
                    </div>
                ))}
            </Slider>
            
        </div>
    );
};

// Datos de ejemplo para las imágenes del carrusel
export const imagenesDeEjemplo = [
    { src: '/assets/images/banner/enacionaldecuidado.png', alt: '', url: 'http://direccion1.com', descripcion: '' },
    { src: '/assets/images/banner/enacionaldecuidado.png', alt: '', url: 'http://direccion2.com', descripcion: '' },
    { src: '/assets/images/banner/enacionaldecuidado.png', alt: '', url: 'http://direccion2.com', descripcion: '' },
    { src: '/assets/images/banner/enacionaldecuidado.png', alt: '', url: 'http://direccion2.com', descripcion: '' },

];

export default function App() {
    return <Carrusel imagenes={imagenesDeEjemplo} />;
}
