import { AiOutlineSearch } from 'react-icons/ai'
import styles from './styles/SearchBarView.module.css'

const SearchBarView = ({ search, setSearch }) => {
  return (
    <div className={styles.container}>
      <AiOutlineSearch className={styles.searchIcon} size={22} />
      <input
        type="search"
        placeholder="Buscar tema"
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBarView
