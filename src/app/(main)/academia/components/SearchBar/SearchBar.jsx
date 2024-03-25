import { RiEqualizerFill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './styles/SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <AiOutlineSearch className={styles.leftIcon} size={22} />
      <input type="search" placeholder="Buscar tema" className={styles.input} />
      <RiEqualizerFill className={styles.rightIcon} size={22} />
    </div>
  )
}

export default SearchBar
