import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/Carousel.module.css'

const Carousel = ({ networkInfo, slideLeft = true }) => {
  // Calculate the number of images
  const numImages = networkInfo?.length

  // Set a CSS variable for the number of images
  const carouselStyles = {
    '--num-images': numImages,
  }
  return (
    <aside className={styles.container}>
      <div className={styles.carouselContainer} style={carouselStyles}>
        {networkInfo?.map((network) => (
          <div
            className={`${styles.carouselInner} ${!slideLeft && styles.animateRightToRight}`}
            key={network?.id}
          >
            <Link href={network?.url} className={styles.link}>
              <Image
                src={network?.src}
                alt={network?.alt}
                width={150}
                height={150}
                loading="lazy"
              />
              {network?.name}
            </Link>
          </div>
        ))}
        {/* duplicate the images */}
        {networkInfo?.map((network) => (
          <div
            className={`${styles.carouselInner} ${!slideLeft && styles.animateRightToRight}`}
            key={`${network?.id}-duplicate`}
          >
            <Link href={network?.url} className={styles.link}>
              <Image
                src={network?.src}
                alt={network?.alt}
                width={150}
                height={150}
                loading="lazy"
              />
              {network?.name}
            </Link>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Carousel
