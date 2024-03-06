import { TabCards } from './components'
import { DocumentFillIcon } from './icons'
import styles from './styles/Tabs.module.css'

const Tabs = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.tabs}>
        <li className={styles.tab}>
          <button className={styles.tabButton}>
            <i>
              <DocumentFillIcon />
            </i>
            Tutoriales
          </button>
          <span className={styles.span} />
        </li>
        <li className={styles.tab}>
          <button className={styles.tabButton}>
            <i>
              <DocumentFillIcon />
            </i>
            Manuales
          </button>
          <span className={styles.span} />
        </li>
        <li className={styles.tab}>
          <button className={styles.tabButton}>
            <i>
              <DocumentFillIcon />
            </i>
            Testimonios
          </button>
          <span className={styles.span} />
        </li>
      </ul>
      <TabCards />
    </section>
  )
}

export default Tabs
