
import { AcademyCard, SearchBar } from './components'
import styles from './styles/Page.module.css'
import AcademyTopView from './components/AcademyTopView/AcademyTopView'
import { getAllVideos } from '@/services/api/api.academy.service'
import Pagination from './components/Pagination/Pagination'


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
        <AcademyTopView />
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