import { RiEqualizerFill } from 'react-icons/ri'
import styles from './styles/FiltersView.module.css'

const FiltersView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input type="search" placeholder="Región" className={styles.input} />
        <RiEqualizerFill className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <input type="search" placeholder="Comuna" className={styles.input} />
        <RiEqualizerFill className={styles.icon} />
      </div>
    </div>
  )
}

export default FiltersView
