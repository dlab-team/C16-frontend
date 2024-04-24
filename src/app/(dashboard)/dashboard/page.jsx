'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './home/styles/HomePage.module.css'
import { TitleView } from './components'
import { UsersTable } from './home/components'

const DashboardHome = () => {
  const [showTable, setShowTable] = useState(false)

  return (
    <section className={styles.container}>
      <TitleView title="Panel" italicTitle="Administración" showIcons={false} />
      <div className={styles.wrapper}>
        <div className={styles.infoContainer}>
          <h3 className={styles.subTitle}>Usuarios Registrados</h3>
          <button
            onClick={() => setShowTable(!showTable)}
            className={`${styles.link} ${styles.first}`}
          >
            <h2 className={styles.span}>100</h2>
          </button>
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.subTitle}>Comentarios reportados</h3>
          <Link
            href="/dashboard/comentarios"
            className={`${styles.link} ${styles.second}`}
          >
            <h2 className={styles.span}>5</h2>
          </Link>
        </div>
      </div>
      {showTable && (
        <UsersTable showTable={showTable} setShowTable={setShowTable} />
      )}
    </section>
  )
}

export default DashboardHome
