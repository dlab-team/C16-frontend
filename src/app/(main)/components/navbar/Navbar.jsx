'use client'


import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { FaRegUser } from 'react-icons/fa';
import styles from './styles/navbar.module.css';
import { useRouter } from 'next/navigation';
import Hamburguermenu from './hamburguer/hamburguermenu';
import { UserContext } from '@/components/context/userContext';
import { getUser } from '@/services/api/api.user.service';

const Navbar = () => {

  const { user, deleteUser } = useContext(UserContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;
  const [showDropdown, setShowDropdown] = useState(false);
  // Inicializamos el botón activo como el de Inicio
  
  const [activeButton, setActiveButton] = useState('/'); // Inicializa el botón activo como '/'

  useEffect(() => {
    setActiveButton(router.pathname); // Establece el botón activo según la ruta actual al renderizar el componente
  }, [router.pathname]);

  const handleButtonClick = (path) => {
    setActiveButton(path);
    router.push(path); // Navegar a la ruta correspondiente
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateRegister = () => {
    router.push('/auth/register');
  };

  const navigateAboutus = () => {
    router.push('/quienessomos');
  };

  const navigateforo = () => {
    router.push('/foro/recientes');
  };

  const navigateCare = () => {
    router.push('/apoyoalcuidador');
  };

  const navigateacademy = () => {
    router.push('/academia');
  };

  const navigatehome = () => {
    router.push('/');
  };

  const navigatelogin = () => {
   router.push('/auth/login')
  };
  
  const navigatePerfil = () => {
    router.push('/perfil')
   };
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
          width={100}
          height={100}
          className={styles.logomovil}
        />
      </div>

      <ul className={styles.pages}>
        <li>
        <button className={`${activeButton === '/' && styles.active}`}     onClick={() => handleButtonClick('/')}>
            Inicio
          </button>
        </li>
        
        <li>
          <button className={`${activeButton === '/quienessomos' && styles.active}`}  onClick={() => handleButtonClick('/quienessomos')}>
            Quienes Somos
          </button>
        </li>
        <li>
          <button className={` ${activeButton === '/academia' && styles.active}`}  onClick={() => handleButtonClick('/academia')}>
            Academia
          </button>
        </li>
        <li>
          <button className={` ${activeButton === '/apoyoalcuidador' && styles.active}`}onClick={() => handleButtonClick('/apoyoalcuidador')}>
            Apoyo al cuidador
          </button>
        </li>
        <li>
          <button className={` ${activeButton === '/foro/recientes' && styles.active}`} onClick={() => handleButtonClick('/foro/recientes')}>
            Foro
          </button>
        </li>
        <li></li>
      </ul>

      <div className={styles.perfilWeb}>
        {user.logged ? (
         <div className={styles.profileWrapper}>
        
         <button className={styles.btnImage} onClick={() => setShowDropdown(!showDropdown)}>
              {user.data.photo ? ( // Renderizar la imagen del usuario si está disponible
                <Image className={styles.userimage} src={user.data.photo} alt="User Photo" width={100} height={100} />
              ) : ( 
                <p>no foto</p>
              )}
            </button>
         
         {showDropdown && (
           <div className={styles.dropdownContent}>
               <button className={`${styles.logoutButton} ${pathname === '/perfil' && styles.active}`} onClick={navigatePerfil}>Perfil</button>
             <button className={styles.logoutButton} onClick={deleteUser}>Cerrar sesion</button>
           </div>
         )}
       </div>
        ) : (
          
          <button  className={`${styles.perfilWeb} ${pathname === '/auth/login' && styles.active}`}  onClick={navigatelogin} >
                <div className={styles.tooltip} >
              <FaRegUser />
            <span className={styles.tooltiptext} > Iniciar sesión </span>
            </div>
                      </button>
         
          
        )}
       
   
      </div>

      <div className={styles.menuToggle}>
        <div className={styles.hamburgerMenu}>
        {user.logged ? ( // Renderizar la imagen del usuario si está disponible
                <Image className={styles.userimage} src={user.data.photo} alt="User Photo" width={100} height={100} />
              ) : (
                <FaRegUser />
              )}
     
          <Hamburguermenu
            toggleMenu={toggleMenu}
            navigateAboutus={navigateAboutus}
            navigateCare={navigateCare}
            navigateacademy={navigateacademy}
            navigateforo={navigateforo}
            navigatehome={navigatehome}
            navigateRegister={navigateRegister}
            deleteUser ={deleteUser }
            navigatePerfil={navigatePerfil}
            userPhoto={user.data.photo}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
