'use client'
import { useState, useEffect, useMemo } from 'react'
import { GoBackButton, TitleView } from '../../components'
import { CommentsDataTable } from '../components'
import styles from './styles/ArchivedComments.module.css'
import { PaginationView } from '@/app/(main)/components'
import { getReports } from '@/services/api/api.report.service'

const ArchivedComments = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [archivedReports, setArchivedReports] = useState([])

  useEffect(() => {
    fetchReports(page)
  }, [page])

  const fetchReports = (pageNum) => {
    getReports(false, pageNum)
      .then((data) => {
        const { data: reportsData, pagination } = data
        setArchivedReports(reportsData)
        setTotalPages(pagination.totalPages)

        if (reportsData.length === 0 && pageNum > 1) {
          setPage(pageNum - 1)
        }
      })
      .catch(() => {
        setArchivedReports([])
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

  const renderArchivedReports = () => {
    if (archivedReports.length > 0) {
      return (
        <CommentsDataTable
          reports={archivedReports}
          refetchData={() => fetchReports(page)}
          tipo="desestimados"
        />
      )
    } else {
      return <p>No hay reportes archivados</p>
    }
  }

  return (
    <section className={styles.container}>
      <GoBackButton />
      <div className={styles.titleWrapper}>
        <TitleView title="Desestimados" italicTitle="" showIcons={false} />
      </div>
      {renderArchivedReports()}
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

export default ArchivedComments
