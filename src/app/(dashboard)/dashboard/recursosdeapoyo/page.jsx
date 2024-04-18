'use client'
import { useState, useEffect } from 'react'
import styles from './styles/Page.module.css'
import { SearchBarView, TitleView } from '../components'
import { ResourceView } from './components'
import { PaginationView } from '@/app/(main)/components'

const DashBoardResources = () => {
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
      <TitleView
        title="Recursos de"
        italicTitle="Apoyo"
        showIcons={true}
        redirectTo="/dashboard/recursosdeapoyo/crear"
      />
      <SearchBarView />
      <div className={styles.wrapper}>
        <ResourceView />
        <ResourceView />
        <PaginationView
          paginationOptions={paginationItems}
          currentPage={1}
          handlePageChange={handlePageChange}
          getTotalPages={getTotalPages}
        />
      </div>
    </section>
  )
}

export default DashBoardResources
