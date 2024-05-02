'use client'
import Link from 'next/link'
import styles from './home/styles/HomePage.module.css'
import { TitleView } from './components'
import { useDashboardHome } from './home/hooks'

const DashboardHome = () => {
  const { totalUsers, totalReports } = useDashboardHome()

  return (
    <section className={styles.container}>
      <TitleView title="Panel" italicTitle="Administración" showIcons={false} />
      <div className={styles.wrapper}>
        <div className={styles.infoContainer}>
          <h3 className={styles.subTitle}>Usuarios Registrados</h3>
          <Link
            href="/dashboard/usuarios"
            className={`${styles.link} ${styles.first}`}
          >
            <h2 className={styles.span}>{totalUsers}</h2>
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.subTitle}>Comentarios reportados</h3>
          <Link
            href="/dashboard/comentarios"
            className={`${styles.link} ${styles.second}`}
          >
            <h2 className={styles.span}>{totalReports}</h2>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DashboardHome
