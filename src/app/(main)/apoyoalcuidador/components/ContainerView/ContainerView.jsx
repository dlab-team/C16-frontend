import { PaginationView } from '@/app/(main)/components'
import { Tabs } from '..'
import { useResources } from '../../hooks'
import GenericBanner from '@/app/(main)/components/GenericBanner/GenericBanner'

const dataBanner = {
  imgUrl:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FimgApoyo.png?alt=media&token=5657a059-3dd9-4556-9b0a-f4d55410b6fa",
  titleMessage:'Apoyo al', //mensaje que va en el titulo
  titleEmphasis:'Cuidador', // el enfasis del texto que va color azul
  message:'Revisa todo el material que tenemos disponible para ti', //mensaje del banner
}

const ContainerView = () => {
  const { paginationOptions, currentPage, handlePageChange, getTotalPages } =
    useResources()

  return (
    <main style={{maxWidth: "1290px", margin:"0 auto"}}>
      <GenericBanner resource={dataBanner}/>
      <Tabs />
      <PaginationView
        paginationOptions={paginationOptions}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        getTotalPages={getTotalPages}
      />
    </main>
  )
}

export default ContainerView
