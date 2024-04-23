'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TitleView } from '../components'
import styles from './styles/DashboardComments.module.css'
import { CommentCard } from './components'
import { PaginationView } from '@/app/(main)/components'

const DashboardComments = () => {
  const [paginationItems, setPaginationItems] = useState([])

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
      <CommentCard />
      <CommentCard />
      <PaginationView
        paginationOptions={paginationItems}
        currentPage={1}
        handlePageChange={handlePageChange}
        getTotalPages={getTotalPages}
      />
    </section>
  )
}

export default DashboardComments
