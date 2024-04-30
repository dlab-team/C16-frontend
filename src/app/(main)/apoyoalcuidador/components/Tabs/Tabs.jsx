import { FiltersView, LeadingResourceCard, TabCards } from './components'
import styles from './styles/Tabs.module.css'

const Tabs = () => {
  return (
    <section className={styles.container}>
      <FiltersView />
      <LeadingResourceCard />
      <TabCards />
    </section>
  )
}

export default Tabs
