'use client'
import { useEffect, useMemo, useState, useContext } from 'react'
import styles from './styles/usuarios.module.css'
import { AiOutlineUpload } from 'react-icons/ai'
import { getAllUsers, downloadExcel } from '@/services/api/api.user.service.js'
import { PaginationView } from '@/app/(main)/components'
import Link from 'next/link'
import { UserContext } from '@/components/context/userContext'
import { SearchBarView } from '../components'

const DashboardUsers = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const { user } = useContext(UserContext)

  const idToken = user.token

  useEffect(() => {
    fetchUsers(page, searchValue)
  }, [page, searchValue])

  const fetchUsers = (pageNum, searchValue) => {
    getAllUsers(pageNum, searchValue)
      .then((data) => {
        const { data: usersData, pagination } = data
        setUsers(usersData)
        setTotalPages(pagination.totalPages)

        if (usersData.length === 0 && pageNum > 1) {
          setPage(pageNum - 1)
        }
      })
      .catch(() => {
        setUsers([])
      })
  }

  const paginationOptions = useMemo(() => {
    const options = []
    for (let i = 1; i <= totalPages; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    return options
  }, [totalPages])

  function handlePageChange(event) {
    const selectedPage = parseInt(event.target.value)
    setPage(selectedPage)
  }

  const handleSearchInputChange = (value) => {
    setSearchValue(value)
    setPage(1)
  }

  const handleDownload = async () => {
    try {
      const response = await downloadExcel(idToken)

      if (!response.ok) {
        throw new Error('Failed to download Excel file')
      }
      const blob = await response.blob()
      const url = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Usuarios.xlsx')
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
    } catch (error) {
      console.error('Error downloading Excel file:', error)
    }
  }

  return (
    <div className={styles.usertable}>
      <div className={styles.userTitle}>
        <h1>Usuarios</h1>
        <div className={styles.downloadIcon} onClick={handleDownload}>
          <AiOutlineUpload />
        </div>
      </div>
      <div className="table">
        <div className={styles.searchContainer}>
          <SearchBarView setSearch={handleSearchInputChange} text={'Buscar por nombre o apellido'}/>
        </div>
        <table>
          <div className={styles.header}>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo Electronico</th>
              <th>Numero de Telefono</th>
              <th>Detalles</th>
            </tr>
          </div>

          {users?.map((user) => (
            <div className={styles.body} key={user.id}>
              <tr>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link
                    href={`/dashboard/usuarios/${user.id}`}
                    className={styles.buttondetails}
                  >
                    Ver detalles
                  </Link>
                </td>
              </tr>
            </div>
          ))}
        </table>
        {users?.length === 0 && (
          <div className={styles.noUsers}>
            <p>No hay Usuarios que correspondan a tu búsqueda</p>
          </div>
        )}
      </div>
      {users.length > 0 && totalPages > 1 && (
        <PaginationView
          paginationOptions={paginationOptions}
          currentPage={page}
          handlePageChange={handlePageChange}
          getTotalPages={() => totalPages}
        />
      )}
    </div>
  )
}

export default DashboardUsers
