import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Carousel.module.css';

const Carousel = ({ networkInfo, slideLeft = true }) => {
  // Verifica si networkInfo es un array antes de mapearlo
  if (!Array.isArray(networkInfo) || networkInfo.length === 0) {
    return null;
  }
  const numImages = networkInfo.length;
  const carouselStyles = { '--num-images': numImages };
  const animationDirection = slideLeft ? styles.animateLeft : styles.animateRight;

  // Función para renderizar cada ítem del carrusel

  const renderCarouselItem = (network, key) => {
    return (
      <div className={styles.carouselInner} key={key}>
        <Link href={network.url} className={styles.link} target="_blank">
          <Image
            src={network.src}
            alt={network.alt}
            width={150}
            height={150}
            loading="lazy"
          />
          {network.name}
        </Link>
      </div>
    );
  };

  return (
    <aside className={styles.container}>
      <div className={`${styles.carouselContainer} ${animationDirection}`} style={carouselStyles}>
        {networkInfo.map((network) => renderCarouselItem(network, network.id))}
        {networkInfo.map((network) => renderCarouselItem(network, `${network.id}-duplicate`))}
      </div>
    </aside>
  );
};

export default Carousel;