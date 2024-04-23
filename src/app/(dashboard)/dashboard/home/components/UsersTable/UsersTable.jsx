'use client'
import { useState, useEffect } from 'react'
import { PaginationView } from '@/app/(main)/components'
import styles from './styles/UsersTable.module.css'

const UsersTable = ({ showTable, setShowTable }) => {
  const [paginationItems, setPaginationItems] = useState([])

  function getTotalPages() {
    return 1
  }

  function paginationOptions() {
    const totalPages = getTotalPages()
    const options = []
    for (let i = 1; i <= totalPages; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    setPaginationItems(options)
  }

  useEffect(() => {
    paginationOptions()
  }, [])

  function handlePageChange() {}

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowTable(!showTable)}
        className={styles.closeLink}
      >
        X
      </button>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" className={styles.th}>
                Nombre
              </th>
              <th scope="col" className={styles.th}>
                Apellido
              </th>
              <th scope="col" className={styles.th}>
                Correo
              </th>
              <th scope="col" className={styles.th}>
                Número teléfonico
              </th>
              <th scope="col" className={styles.th}>
                Rut
              </th>
              <th scope="col" className={styles.th}>
                Fecha
              </th>
              <th scope="col" className={styles.th}>
                Género
              </th>
              <th scope="col" className={styles.th}>
                Región
              </th>
              <th scope="col" className={styles.th}>
                Comuna
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>Diego</td>
              <td className={styles.td}>Fernández</td>
              <td className={styles.td}>XXXXXXXXXXXXXXX</td>
              <td className={styles.td}>XXXXXXXXXXXXXXX</td>
              <td className={styles.td}>XXXXXXXXXXXXXXX</td>
              <td className={styles.td}>XXXXXXXXXXXXXXX</td>
              <td className={styles.td}>XXXXXXXXXXXXXXX</td>
              <td className={styles.td}>XXXXXXXXXXXXXXX</td>
              <td className={styles.td}>Puntarenas</td>
            </tr>
          </tbody>
        </table>
        <PaginationView
          paginationOptions={paginationItems}
          currentPage={1}
          handlePageChange={handlePageChange}
          getTotalPages={getTotalPages}
        />
      </div>
    </div>
  )
}

export default UsersTable
