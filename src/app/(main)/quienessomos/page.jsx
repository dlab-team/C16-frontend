import GenericBanner from '../components/GenericBanner/GenericBanner'
import containerStyles from './styles/Page.module.css'
import { Carousel, UsView } from './components'

const dataBanner = {
  imgUrl:
    'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FimgAboutus.png?alt=media&token=b9f7b84d-7e6c-4718-a417-1fa2aadca7d5',
  titleMessage: '', //mensaje que va en el titulo
  titleEmphasis: 'Sobre Nosotros', // el enfasis del texto que va color azul
  message:
    'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit', //mensaje del banner
}

// Datos de ejemplo para las imágenes del carrusel
export const imagenesDeEjemplo = [
  {
    id: 1,
    src: '/assets/img/logo.svg',
    alt: 'Imagen 1',
    url: 'http://direccion1.com',
    name: 'RNCuidadoras',
  },
  {
    id: 2,
    ssrc: '/assets/img/logo.svg',
    alt: 'Imagen 1',
    url: 'http://direccion1.com',
    name: 'RNCuidadoras',
  },
  {
    id: 3,
    src: '/assets/img/logo.svg',
    alt: 'Imagen 1',
    url: 'http://direccion1.com',
    name: 'RNCuidadoras',
  },
  {
    id: 4,
    src: '/assets/img/logo.svg',
    alt: 'Imagen 1',
    url: 'http://direccion1.com',
    name: 'RNCuidadoras',
  },
  {
    id: 5,
    src: '/assets/img/logo.svg',
    alt: 'Imagen 1',
    url: 'http://direccion1.com',
    name: 'RNCuidadoras',
  },
]

function QuienesSomos() {
  return (
    <main>
      <div  className={containerStyles.wrapper}>
        <GenericBanner resource={dataBanner} />
      </div>
      <UsView />
      <section className={containerStyles.container}>
        <h2 className={containerStyles.title}>Nuestra Red</h2>
        <Carousel networkInfo={imagenesDeEjemplo} slideLeft={true} />
        <Carousel networkInfo={imagenesDeEjemplo} slideLeft={false} />
      </section>
    </main>
  )
}

export default QuienesSomos
