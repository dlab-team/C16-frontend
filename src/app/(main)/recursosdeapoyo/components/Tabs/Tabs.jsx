import { AiFillFile, AiOutlineFile } from 'react-icons/ai'
import { TabCards } from './components'
import styles from './styles/Tabs.module.css'
import { useResources } from '../../hooks'

const Tabs = () => {
  const { TABS_NAMES, tabActive, handleTabActive, setTabName } = useResources()

  return (
    <section className={styles.container}>
      <ul className={styles.tabs}>
        {TABS_NAMES.map((tab) => (
          <li className={styles.tab} key={tab.id}>
            <button
              className={
                tabActive === tab.id ? styles.tabActive : styles.tabButton
              }
              onClick={() => {
                handleTabActive(tab.id)
                setTabName(tab.name)
              }}
            >
              <AiFillFile className={styles.fillIcon} />
              <AiOutlineFile className={styles.outlineIcon} />
              {tab.name}
            </button>
            <span
              className={tabActive === tab.id ? styles.spanActive : styles.span}
            />
          </li>
        ))}
      </ul>
      <TabCards />
    </section>
  )
}

export default Tabs
