import GenericBanner from '../components/GenericBanner/GenericBanner'
import containerStyles from './styles/Page.module.css'
import { Carousel, UsView } from './components'
import { getPartners } from '@/services/api/api.patner.service'

const dataBanner = {
  imgUrl:
    'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fimage.png?alt=media&token=32629d2b-785a-4778-8d8a-9dfd1b96c9b4',
  titleMessage: '', //mensaje que va en el titulo
  titleEmphasis: 'Sobre Nosotros', // el enfasis del texto que va color azul
  message:
    'Red Nacional de Cuidados', //mensaje del banner
}



async function QuienesSomos() {
  const partners = await getPartners()

  return (
    <main className={containerStyles.main}>
      <div  className={containerStyles.wrapper}>
        <GenericBanner resource={dataBanner} />
      </div>
      <UsView />
      <section className={containerStyles.container}>
        <h2 className={containerStyles.title}>Nuestra Red</h2>
        <Carousel networkInfo={partners.data} slideLeft={true} />
        <Carousel networkInfo={partners.data} slideLeft={false} />
      </section>
    </main>
  )
}

export default QuienesSomos