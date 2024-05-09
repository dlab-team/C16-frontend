'use client'

import { AiOutlineUpload } from 'react-icons/ai'
import SearchAcademia from './components/searchAcademia/searchAcademia'
import styles from './styles/academia.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useMemo } from 'react'
import CardAcademia from './components/cardAcademia/CardAcademia'
import { getAllVideos } from '@/services/api/api.academy.service.js'
import { PaginationView } from '@/app/(main)/components'
const Academia = () => {
  const [videos, setVideos] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetchVideos(page, searchValue)
  }, [page, searchValue])

  const fetchVideos = async (pageNum, searchValue) => {
    await getAllVideos(pageNum, searchValue)
      .then((response) => {
        if (!response.ok) {
          //alert('posible error')
        }
        return response.json()
      })
      .then((res) => {
        setVideos(res.data)
        setTotalPages(res.pagination.totalPages)

        if (res.data.length === 0 && pageNum > 1) {
          setPage(pageNum - 1)
        }
      })
      .catch(() => {
        setVideos([])
      })
  }

  const paginationOptions = useMemo(() => {
    const options = []
    for (let i = 1; i <= totalPages; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    return options
  }, [totalPages])

  function handlePageChange(event) {
    const selectedPage = parseInt(event.target.value)
    setPage(selectedPage)
  }

  const router = useRouter()
  const pathname = router.pathname

  const navigateToEditAcademia = (id) => {
    router.push(`/dashboard/academia/postacademia/${id}`)
  }
  const navigateToFormAcademia = () => {
    router.push('/dashboard/academia/formacademia') // Ajusta la ruta según sea necesario
  }

  return (
    <div className={styles.containerRed}>
      <div className={styles.title}>
        <h1>Recursos de Academia</h1>
        <button
          className={`${styles.iconform} ${pathname === '/dashboard/academia/formacademia' && styles.active}`}
          onClick={navigateToFormAcademia}
        >
          <AiOutlineUpload />
        </button>
      </div>

      <SearchAcademia search={searchValue} setSearch={setSearchValue} />

      <div className={styles.seccionCard}>
        {videos?.map((video) => (
          <CardAcademia
            key={video.id}
            id={video.id}
            title={video.title}
            description={video.description}
            autor={video.author}
            url={video.materialURL}
            duration={video.duration}
            pathname={router.pathname}
            navigateToEditAcademia={navigateToEditAcademia}
            refetchData={() => fetchVideos(page)}
          />
        ))}
      </div>

      {/* Renderizar el modal */}
      <div className={styles.pagination}>
        {videos.length > 0 && totalPages > 1 && (
          <PaginationView
            paginationOptions={paginationOptions}
            currentPage={page}
            handlePageChange={handlePageChange}
            getTotalPages={() => totalPages}
          />
        )}
      </div>
    </div>
  )
}

export default Academia
