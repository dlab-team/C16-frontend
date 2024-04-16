import { AiOutlineSearch } from 'react-icons/ai'
import { RiEqualizerFill } from 'react-icons/ri'
import styles from './styles/SearchBarView.module.css'

const SearchBarView = () => {
  return (
    <div className={styles.container}>
      <AiOutlineSearch className={styles.searchIcon} size={22} />
      <input type="search" placeholder="Buscar tema" className={styles.input} />
      <RiEqualizerFill className={styles.filterIcon} />
    </div>
  )
}

export default SearchBarView
