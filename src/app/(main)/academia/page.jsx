
import { AcademyCard, SearchBar } from './components'
import styles from './styles/Page.module.css'
import { getAllVideos } from '@/services/api/api.academy.service'
import Pagination from './components/Pagination/Pagination'
import GenericBanner from '../components/GenericBanner/GenericBanner'

const dataBanner = {
  imgUrl:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FimgAcademia.png?alt=media&token=85960cc2-7829-495c-a502-a38e1e33b5f5",
  titleMessage:'', //mensaje que va en el titulo
  titleEmphasis:'Academia', // el enfasis del texto que va color azul
  message:'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit', //mensaje del banner
}

async function Academia ({searchParams}) {
  const {page, search} = searchParams
  let videos = []
  let pagination = {currentPage:0, totalPage:0, totalItems:0}

  await getAllVideos(page, search)
  .then((response)=>{
    if(!response.ok){
      //alert('posible error')
    }
    return response.json()
  })
  .then((res)=>{
    videos = res.data
    pagination = res.pagination
  })

  return (
      <main className={styles.container}>
        <GenericBanner resource={dataBanner}/>
        <SearchBar />
        <div className={styles.cardWrapper}>
          {videos.map((item) => (
            <AcademyCard key={item.id} data={item}/>
          ))}
        </div>

        <Pagination data={pagination} search={search}/>
      </main>
  )
}

export default Academia