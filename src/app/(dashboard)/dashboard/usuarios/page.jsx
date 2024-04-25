import styles from './styles/usuarios.module.css'
import { AiOutlineUpload } from 'react-icons/ai'
import SearchUser from './components/searchuser/searchuser'

const DashboardUsers = () => {
  const pruebatabla = [
    {
      id: 1,
      name: 'Paula',
      lastname: 'Torres Ortiz ',
      mail: 'mail@corre.com',
      phone: '987654321 ',
    },
    {
      id: 2,
      name: 'Paula',
      lastname: 'Torres Ortiz ',
      mail: 'mail@corre.com',
      phone: '987654321 ',
    },
    {
      id: 3,
      name: 'Paula',
      lastname: 'Torres Ortiz ',
      mail: 'mail@corre.com',
      phone: '987654321 ',
    },
    {
      id: 4,
      name: 'Paula',
      lastname: 'Torres Ortiz ',
      mail: 'mail@corre.com',
      phone: '987654321 ',
    },
    {
      id: 5,
      name: 'Paula',
      lastname: 'Torres Ortiz ',
      mail: 'mail@corre.com',
      phone: '987654321 ',
    },
    {
      id: 6,
      name: 'Paula',
      lastname: 'Torres Ortiz ',
      mail: 'mail@corre.com',
      phone: '987654321 ',
    },
  ]

  return (
    <div className={styles.usertable}>
      <div className={styles.userTitle}>
        <h1>Usuarios</h1>
        <AiOutlineUpload />
      </div>
      <SearchUser />
      <div className="table">
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

          {pruebatabla.map((prueba) => (
            <div className={styles.body}>
              <tr key={prueba.id}>
                <td>{prueba.name}</td>
                <td>{prueba.lastname}</td>
                <td>{prueba.mail}</td>
                <td>{prueba.phone}</td>
                <td>
                  <button className={styles.buttondetails}>
                    {' '}
                    Ver detalles
                  </button>
                </td>
              </tr>
            </div>
          ))}
        </table>
      </div>
    </div>
  )
}

export default DashboardUsers
