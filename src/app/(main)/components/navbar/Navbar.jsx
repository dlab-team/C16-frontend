'use client'
import { useState, useContext } from 'react'
import Image from 'next/image'
import { FaRegUser } from 'react-icons/fa'
import styles from './styles/navbar.module.css'
import { useRouter } from 'next/navigation';
import Hamburguermenu from './hamburguer/hamburguermenu'
import { UserContext } from '@/components/context/userContext'
import { button } from '@nextui-org/react'


const Navbar = () => {

const {user} = useContext(UserContext)
 


  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = ()=>{
  
    logOut()
  }
  const toggleMenu = () => {
    console.log('Toggle menu clicked')
    setMenuOpen(!menuOpen)
  }

  
  const router = useRouter();
  const pathname = router.pathname;

  const navigateRegister = () => {
    router.push('/auth/register'); 
    // Ajusta la ruta según sea necesario
  };

  const navigateAboutus = () => {
    router.push('/quienessomos'); 
    // Ajusta la ruta según sea necesario
  };
  const navigateforo = () => {
    router.push('/foro'); // Ajusta la ruta según sea necesario
  };
  const navigateCare= () => {
    router.push('/apoyoalcuidador'); // Ajusta la ruta según sea necesario
  };
  const navigateacademy = () => {
    router.push('/academia'); // Ajusta la ruta según sea necesario
  };
  const navigatehome = () => {
    router.push('/'); // Ajusta la ruta según sea necesario
  };
  console.log( navigateAboutus)

  return (
    <div className={styles.navbar}>
      <div className={styles.logonavbar}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FRNC_Horizontal_Color.png?alt=media&token=7d7203c1-39ce-4e3f-b560-e7194ea0f8ac"
          alt="logo red nacional de cuidadores"
          width={230}
          height={100}
          className={styles.logoweb}
          onClick={navigatehome}
        />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FRNC_Horizontal_Color.png?alt=media&token=7d7203c1-39ce-4e3f-b560-e7194ea0f8ac"
          alt="logo red nacional de cuidadores"
          width={120}
          height={80}
          className={styles.logomovil}
        />
      </div>

      <ul className={styles.pages}>
        <li>
          <button className={` ${pathname === '/' && styles.active}`} onClick={navigatehome}>Inicio</button>
        </li>
        <li>
          <button className={` ${pathname === '/quienessomos' && styles.active}`} onClick={navigateAboutus} >Quienes Somos</button>
        </li>
        <li>
          <button className={` ${pathname === '/academia' && styles.active}`} onClick={navigateacademy}>Academia</button>
        </li>
        <li>
          <button className={` ${pathname === '/apoyoalcuidador' && styles.active}`} onClick={navigateCare}>Apoyo al cuidador</button>
        </li>
        <li>
          <button className={` ${pathname === '/foro' && styles.active}`} onClick={navigateforo}>Foro</button>
        </li>
        <li>
        
        </li>
      </ul>

      <div className={styles.perfilWeb}>
   

 
        {
          user.logged ? 
          <button> imagen </button>

          :
          <button  className={styles.perfilWeb}  type='button'> <FaRegUser />   </button>
        }
    
      </div>

      <div className={styles.menuToggle}>
    

        <div className={styles.hamburgerMenu}>
          <Hamburguermenu
           toggleMenu={toggleMenu}
           navigateAboutus={navigateAboutus}
           navigateCare={navigateCare}
           navigateacademy={navigateacademy}
           navigateforo={navigateforo }
           navigatehome={navigatehome}
           navigateRegister={navigateRegister}
            />
        </div>
      </div>
    </div>
  )
}

export default Navbar
