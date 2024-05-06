import styles from './styles/Spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <div className={styles.loading}></div>
        <h1 className={styles.title}>Cargando...</h1>
      </div>
    </div>
  )
}

export default Spinner
