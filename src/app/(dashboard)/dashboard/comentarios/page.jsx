'use client'
import { useState, useEffect, useMemo, useContext } from 'react'
import Link from 'next/link'
import { TitleView } from '../components'
import styles from './styles/DashboardComments.module.css'
import { CommentCard } from './components'
import { PaginationView } from '@/app/(main)/components'
import { getReports } from '@/services/api/api.report.service'
import { UserContext } from '@/components/context/userContext'

const DashboardComments = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [reports, setReports] = useState([])
  const { user } = useContext(UserContext)
  const idToken = user?.token

  useEffect(() => {
    fetchReports(page)
  }, [page])

  const fetchReports = (pageNum) => {
    getReports('', pageNum, idToken)
      .then((data) => {
        const { data: reportsData, pagination } = data
        setReports(reportsData)
        setTotalPages(pagination.totalPages)

        if (reportsData.length === 0 && pageNum > 1) {
          setPage(pageNum - 1)
        }
      })
      .catch(() => {
        setReports([])
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

  return (
    <section id="padre" className={styles.container}>
      <TitleView
        title="Comentarios reportados"
        italicTitle=""
        showIcons={false}
      />
      <div className={styles.linksContainer}>
        <Link
          href="/dashboard/comentarios/desestimados"
          className={styles.link}
        >
          Desestimados
          <hr className={styles.hr} />
        </Link>
        <Link href="/dashboard/comentarios/ocultos" className={styles.link}>
          Ocultos
          <hr className={styles.hr} />
        </Link>
      </div>
      {reports?.length > 0 &&
        reports?.map((report) => (
          <CommentCard
            key={report.id}
            id={report.id}
            comment={report.content}
            author={report.PostAuthor}
            reporter={report.ReportAuthor}
            number={report.quantity}
            refetchData={() => fetchReports(page)}
          />
        ))}
      {reports?.length === 0 && <p>No hay reportes</p>}
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

export default DashboardComments
