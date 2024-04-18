'use client'
import { useState, useEffect } from 'react'
import { PaginationView } from '../components'
import { AcademyCard, SearchBar } from './components'
import styles from './styles/Page.module.css'
import AcademyTopView from './components/AcademyTopView/AcademyTopView'

const CARDS_ARRAY = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
] //ToDo: remove array (only for dev mode)

function Academia() {
  const [paginationItems, setPaginationItems] = useState([])
  const { user, loading } = useAuth(); 
  const router = useRouter();

  function getTotalPages() {
    return 1
  }

  function paginationOptions() {
    const totalPages = getTotalPages()
    const options = []
    for (let i = 1; i <= totalPages; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    setPaginationItems(options)
  }

  useEffect(() => {
    paginationOptions()
  }, [])

  function handlePageChange() {}

  return (
    <main className={styles.container}>
      <AcademyTopView />
      <SearchBar />
      <div className={styles.cardWrapper}>
        {CARDS_ARRAY.map((item) => (
          <AcademyCard key={item.id} />
        ))}
      </div>
      <PaginationView
        paginationOptions={paginationItems}
        currentPage={1}
        handlePageChange={handlePageChange}
        getTotalPages={getTotalPages}
      />
    </main>
  )
}

export default Academia
