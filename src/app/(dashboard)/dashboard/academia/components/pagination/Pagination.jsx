import styles from './styles/pagination.module.css'

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <div>
        <p>Pag</p>
        </div >
      <div className={styles.paginationSelect}>
        <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>  
            <option value="">3</option>  
            <option value="">4</option> 
             <option value="">5</option>
        </select>
        </div>
        <div>de 10</div>
    </div>
  )
}

export default Pagination
