import { IoIosMenu, IoIosClose } from 'react-icons/io'
import styles from './styles/hamburguermenu.module.css'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/components/context/userContext'
import Image from 'next/image'
import { useState, useContext } from 'react'

const Hamburguermenu = ({
  toggleMenu,
  navigateAboutus,
  navigateCare,
  navigateacademy,
  navigateforo,
  navigatehome,
  navigateRegister,
  navigatePerfil,
  userPhoto,
}) => {
  const [showUseClient, setShowUseClient] = useState(false)

  const { user, deleteUser } = useContext(UserContext)

  const toggleUseClient = () => {
    setShowUseClient(!showUseClient)
  }

  const router = useRouter()
  const pathname = router.pathname

  return (
    <div className={styles.drawer}>
      <button
        className={styles.toggle}
        onClick={() => {
          toggleMenu()
          toggleUseClient()
        }}
      >
        <IoIosMenu />
      </button>

      {showUseClient && (
        <div className={styles.menu}>
          <ul className={styles.pages}>
            {user.logged ? (
              <li className={styles.topmenu}>
                <button
                  className={styles.toggleClose}
                  onClick={() => {
                    toggleMenu()
                    toggleUseClient()
                  }}
              
                >
                  <p className={styles.close}>      <IoIosClose /></p>
            
                </button>
                <Image width={100} height={100} />
                <p>nombre de usuari</p>
                <p>mail</p>
                <button
                  className={` ${styles.topmenuPerfil} ${pathname === '/perfil' && styles.active}`}
                  onClick={navigatePerfil}
                >
                  Mi pefil
                </button>
              </li>
            ) : (
              <li className={styles.topmenu}>
                   <button
                  className={styles.toggleClose}
                  onClick={() => {
                    toggleMenu()
                    toggleUseClient()
                  }}
              
                >
                  <p className={styles.close}>      <IoIosClose /></p>
            
                </button>
                Para tener una mejor experiencia,{' '}
                <button
                  className={` ${styles.perfiltopmenulink} ${pathname === '/auth/register' && styles.active}`}
                  onClick={navigateRegister}
                >
                  regístrate
                </button>{' '}
                con nosotros.
              </li>
            )}

            <li>
              <button
                className={` ${pathname === '/' && styles.active}`}
                onClick={navigatehome}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                className={` ${pathname === '/quienessomos' && styles.active}`}
                onClick={navigateAboutus}
              >
                Quienes Somos
              </button>
            </li>
            <li>
              <button
                className={` ${pathname === '/academia' && styles.active}`}
                onClick={navigateacademy}
              >
                Academia
              </button>
            </li>
            <li>
              <button
                className={` ${pathname === '/apoyoalcuidador' && styles.active}`}
                onClick={navigateCare}
              >
                Apoyo al cuidador
              </button>
            </li>
            <li>
              <button
                className={` ${pathname === '/foro' && styles.active}`}
                onClick={navigateforo}
              >
                Foro
              </button>
            </li>
            {user.logged ? (
              <button
                className={` ${pathname === '/foro' && styles.active}`}
                onClick={deleteUser}
              >
                Cerrar sesión
              </button>
            ) : (
              <button
                className={` ${pathname === '/foro' && styles.active}`}
                onClick={navigateforo}
              >
                Iniciar sesión
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Hamburguermenu
