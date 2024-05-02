'use client'
import { useState, useEffect, useMemo, useContext } from 'react'
import { GoBackButton, TitleView } from '../../components'
import { CommentsDataTable } from '../components'
import styles from './styles/HiddenComments.module.css'
import { PaginationView } from '@/app/(main)/components'
import { getReports } from '@/services/api/api.report.service'
import { UserContext } from '@/components/context/userContext'

const HiddenComments = () => {
  const [hiddenReports, setHiddenReports] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const { user } = useContext(UserContext)
  const idToken = user?.token

  useEffect(() => {
    fetchReports(page)
  }, [page])

  const fetchReports = (pageNum) => {
    getReports(true, pageNum, idToken)
      .then((data) => {
        const { data: reportsData, pagination } = data
        setHiddenReports(reportsData)
        setTotalPages(pagination.totalPages)

        if (reportsData.length === 0 && pageNum > 1) {
          setPage(pageNum - 1)
        }
      })
      .catch(() => {
        setHiddenReports([])
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

  const renderHiddenReports = () => {
    if (hiddenReports?.length > 0) {
      return (
        <CommentsDataTable
          reports={hiddenReports}
          refetchData={() => fetchReports(page)}
          tipo="ocultos"
        />
      )
    } else {
      return <p>No hay reportes aceptados</p>
    }
  }
  return (
    <section className={styles.container}>
      <GoBackButton />
      <div className={styles.titleWrapper}>
        <TitleView title="Ocultos" italicTitle="" showIcons={false} />
      </div>
      {renderHiddenReports()}
      {totalPages > 1 && (
        <PaginationView
          paginationOptions={paginationOptions}
          currentPage={page}
          handlePageChange={handlePageChange}
          getTotalPages={() => totalPages}
        />
      )}
    </section>
  )
}

export default HiddenComments
