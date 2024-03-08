import styles from './styles/PaginationView.module.css';

const PaginationView = () => {
  return (
    <div className={styles.container}>
      <p className={styles.p}>Pag</p>
      <div className={styles.selectContainer}>
        <select className={styles.select}>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select>
        <i className={styles.i} />
      </div>
      <p className={styles.p}>de 10</p>
    </div>
  );
};

export default PaginationView;
