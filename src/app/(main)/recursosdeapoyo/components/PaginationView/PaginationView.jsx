import { useResources } from '../../hooks'
import styles from './styles/PaginationView.module.css'

const PaginationView = () => {
  const { paginationOptions, currentPage, handlePageChange, getTotalPages } =
    useResources()

  return (
    <div className={styles.container}>
      <p className={styles.p}>Pag</p>
      <div className={styles.selectContainer}>
        <select
          className={styles.select}
          value={currentPage}
          onChange={handlePageChange}
        >
          {paginationOptions.map((option) => option)}
        </select>
        <i className={styles.i} />
      </div>
      <p className={styles.p}>de {getTotalPages()}</p>
    </div>
  )
}

export default PaginationView
