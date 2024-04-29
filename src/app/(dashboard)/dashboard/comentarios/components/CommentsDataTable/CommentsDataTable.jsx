import styles from './styles/CommentsDataTable.module.css'

const CommentsDataTable = ({ comment, author, adminName, date, cellTitle }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Comentario</th>
          <th className={styles.th}>Autor</th>
          <th className={styles.th}>Administrador</th>
          <th className={styles.th}>{cellTitle}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.td}>
            <div className={styles.leftCell}>
              <p className={styles.span}>{comment}</p>
            </div>
          </td>
          <td className={styles.td}>
            <div className={styles.cell}>
              <p className={styles.p}>{author}</p>
            </div>
          </td>
          <td className={styles.td}>
            <div className={styles.cell}>
              <p className={styles.p}>{adminName}</p>
            </div>
          </td>
          <td className={styles.td}>
            <div className={styles.rightCell}>
              <p className={styles.p}>{date}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default CommentsDataTable
