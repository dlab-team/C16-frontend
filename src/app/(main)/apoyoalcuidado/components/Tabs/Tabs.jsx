import { FiltersView } from '..'
import { TabCards } from './components'
import styles from './styles/Tabs.module.css'

const Tabs = () => {
  return (
    <section className={styles.container}>
      <FiltersView />
      <TabCards />
    </section>
  )
}

export default Tabs
