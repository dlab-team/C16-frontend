import { AiOutlineSearch } from 'react-icons/ai'

import styles from './styles/SearchBarView.module.css'

const SearchBarView = ({ setSearch, text='Buscar tema' }) => {

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }
  return (
    <div className={styles.container}>
      <AiOutlineSearch className={styles.searchIcon} size={22} />
      <input
        type="search"
        placeholder={text}
        className={styles.input}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default SearchBarView
