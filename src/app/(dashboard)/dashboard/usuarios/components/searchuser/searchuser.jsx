import { IoSearchOutline } from 'react-icons/io5'
import { IoMdOptions } from 'react-icons/io'
import styles from './styles/searchUser.module.css'

const SearchUser = ({ setSearch }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

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
            type="text"
            placeholder="Rondaaaa"
            onChange={handleInputChange}
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

export default SearchUser