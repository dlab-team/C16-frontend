import { IoSearchOutline } from 'react-icons/io5'
import { IoMdOptions } from 'react-icons/io'
import styles from "./styles/searchRed.module.css"


const SearchRed = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchSeccion}>
      <div className={styles.searchButton}>
        <button>
          <IoSearchOutline />
        </button>
      </div>
      <div className={styles.searchInput}>
        <input type="text" placeholder='Ronda' />
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

export default SearchRed
