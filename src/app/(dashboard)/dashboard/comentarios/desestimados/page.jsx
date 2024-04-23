'use client'
import { useState, useEffect } from 'react'
import { GoBackButton, TitleView } from '../../components'
import { CommentsDataTable } from '../components'
import styles from './styles/ArchivedComments.module.css'
import { PaginationView } from '@/app/(main)/components'

const ArchivedComments = () => {
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
    <section className={styles.container}>
      <GoBackButton />
      <div className={styles.titleWrapper}>
        <TitleView title="Desestimados" italicTitle="" showIcons={false} />
      </div>
      <CommentsDataTable
        comment="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
      vulputate libero et velit interdum, ac aliquet odio mattis."
        author="Juan Perez"
        adminName="Paola Gomez"
        date="2023/05/05"
        cellTitle="Fecha de desestimación"
      />
      <PaginationView
        paginationOptions={paginationItems}
        currentPage={1}
        handlePageChange={handlePageChange}
        getTotalPages={getTotalPages}
      />
    </section>
  )
}

export default ArchivedComments
