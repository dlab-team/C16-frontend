import { IoSearchOutline } from 'react-icons/io5'
import { IoMdOptions } from 'react-icons/io'
import styles from './styles/searchAcademia.module.css'

const SearchAcademia = ({ search, setSearch }) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchSeccion}>
        <div className={styles.searchButton}>
          <button>
            <IoSearchOutline />
          </button>
        </div>
        <div className={styles.searchInput}>
          <input
            type="search"
            placeholder="Buscar tema"
            className={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.searchButton}>
          <button>
            <IoMdOptions />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchAcademia
