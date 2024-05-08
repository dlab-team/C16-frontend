
import GenericBanner from '../components/GenericBanner/GenericBanner';
import containerStyles from './styles/Page.module.css';
import { Carousel, UsView } from './components';
import { getAllPartners } from '@/services/api/api.partners.service';

const dataBanner = {
  imgUrl:
    'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FimgAboutus.png?alt=media&token=b9f7b84d-7e6c-4718-a417-1fa2aadca7d5',
  titleMessage: '', //mensaje que va en el titulo
  titleEmphasis: 'Sobre Nosotros', // el enfasis del texto que va color azul
  message:
    'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit', //mensaje del banner
}

async function QuienesSomos(params, searchParams) {
  // Desestructura los parámetros
  const { id } = params;
  const page = searchParams? searchParams.page : 1; 

  // Llama a la función para obtener los socios
  const response = await getAllPartners(id, page);

  // Mapea los datos de los socios para extraer solo las URL de las imágenes
  const images = response.data.map(partner => ({
    src: partner.image, 
    alt: partner.name,
    url: partner.url,
  }));

  return (
    <main>
      <div className={containerStyles.wrapper}>
        <GenericBanner resource={dataBanner} />
      </div>
      <UsView />
      <section className={containerStyles.container}>
        <h2 className={containerStyles.title}>Nuestra Red</h2>
        {/* Pasamos los datos de los socios al componente del carrusel */}
        <Carousel networkInfo={images} slideLeft={true} />
        <Carousel networkInfo={images} slideLeft={false} />
      </section>
    </main>
  )
}

export default QuienesSomos;
