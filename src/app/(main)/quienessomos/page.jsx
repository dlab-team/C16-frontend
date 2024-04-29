import DinamicBanner from '../components/DinamicBanner/DinamicBanner'
import styles from '../components/DinamicBanner/DinamicBanner.module.css'
import containerStyles from './styles/Page.module.css'
import { Carousel, UsView } from './components'

// Datos de ejemplo para las imágenes del carrusel
export const imagenesDeEjemplo = [
  {
    id: 1,
    src: '/assets/images/banner/enacionaldecuidado.png',
    alt: 'Imagen 1',
    url: 'http://direccion1.com',
    name: 'RNCuidadoras',
  },
  {
    id: 2,
    src: '/assets/images/banner/enacionaldecuidado.png',
    alt: 'Imagen 1',
    url: 'http://direccion1.com',
    name: 'RNCuidadoras',
  },
  {
    id: 3,
    src: '/assets/images/banner/enacionaldecuidado.png',
    alt: 'Imagen 1',
    url: 'http://direccion1.com',
    name: 'RNCuidadoras',
  },
  {
    id: 4,
    src: '/assets/images/banner/enacionaldecuidado.png',
    alt: 'Imagen 1',
    url: 'http://direccion1.com',
    name: 'RNCuidadoras',
  },
  {
    id: 5,
    src: '/assets/images/banner/enacionaldecuidado.png',
    alt: 'Imagen 1',
    url: 'http://direccion1.com',
    name: 'RNCuidadoras',
  },
]

function QuienesSomos() {
  return (
    <>
      <DinamicBanner
        imageSrc="/assets/images/banner/quienessomosbanner.png"
        title="Sobre Nosotros"
        message=""
        customStyles={{
          desktopContainer: styles.quienesSomosDesktopContainer,
          bannerImg: styles.quienesSomosBannerImg,
          bannerTextBox: styles.quienesSomosBannerTextBox,
          bannerTitle: styles.quienesSomosBannerTitle,
          bannerMessage: styles.quienesSomosBannerMessage,
        }}
      />
      <UsView />
      <div className={containerStyles.container}>
        <h2 className={containerStyles.title}>Nuestra Red</h2>
        <Carousel networkInfo={imagenesDeEjemplo} slideLeft={true} />
        <Carousel networkInfo={imagenesDeEjemplo} slideLeft={false} />
      </div>
    </>
  )
}

export default QuienesSomos
