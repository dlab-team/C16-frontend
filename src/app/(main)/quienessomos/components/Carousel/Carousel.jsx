import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Carousel.module.css';

// Función para renderizar cada ítem del carrusel
const renderCarouselItem = (network, key) => {
  return (
    <div className={styles.carouselInner} key={key}>
      <Link href={network.url} className={styles.link} target="_blank">
        <Image
          src={network.image}
          alt={network.description}
          width={150}
          height={150}
          loading="lazy"
        />
        {network.name}
      </Link>
    </div>
  );
};

const Carousel = ({ networkInfo = [], slideLeft = true }) => {
  // Calcula el número de imágenes para definir la variable CSS
  const numImages = networkInfo.length;
  const carouselStyles = { '--num-images': numImages };
  const animationDirection = slideLeft ? styles.animateLeft : styles.animateRight;

  return (
    <aside className={styles.container}>
      <div className={`${styles.carouselContainer} ${animationDirection}`} style={carouselStyles}>
        {/* Renderiza las imágenes originales */}
        {networkInfo.map((network) => renderCarouselItem(network, network.id))}
        {/* Duplica las imágenes para un carrusel continuo */}
        {networkInfo.map((network) => renderCarouselItem(network, `${network.id}-duplicate`))}
      </div>
    </aside>
  );
};

export default Carousel;
