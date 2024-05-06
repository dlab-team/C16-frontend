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
  const [userPhoto, setUserPhoto] = useState(null);


  useEffect(() => {
    const obtenerFotoUsuario = async () => {
      try {
        // Llamamos a la función getUser para obtener la foto del usuario
        const photo = await getUser(uid); // Asegúrate de tener el uid del usuario disponible
        setUserPhoto(photo);
      } catch (error) {
        console.error('Error al obtener la foto del usuario:', error);
      }
    };

    obtenerFotoUsuario();
  }, []); // Asegúrate de pasar las dependencias adecuadas si es necesario



  const toggleMenu = () => {
    console.log('Toggle menu clicked');
    setMenuOpen(!menuOpen);
  };

  const navigateRegister = () => {
    router.push('/auth/register');
  };

  const navigateAboutus = () => {
    router.push('/quienessomos');
  };

  const navigateforo = () => {
    router.push('/foro');
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
          width={200}
          height={80}
          className={styles.logomovil}
        />
      </div>

      <ul className={styles.pages}>
        <li>
          <button className={` ${pathname === '/' && styles.active}`} onClick={navigatehome}>
            Inicio
          </button>
        </li>
        <li>
          <button className={` ${pathname === '/quienessomos' && styles.active}`} onClick={navigateAboutus}>
            Quienes Somos
          </button>
        </li>
        <li>
          <button className={` ${pathname === '/academia' && styles.active}`} onClick={navigateacademy}>
            Academia
          </button>
        </li>
        <li>
          <button className={` ${pathname === '/apoyoalcuidador' && styles.active}`} onClick={navigateCare}>
            Apoyo al cuidador
          </button>
        </li>
        <li>
          <button className={` ${pathname === '/foro' && styles.active}`} onClick={navigateforo}>
            Foro
          </button>
        </li>
        <li></li>
      </ul>

      <div className={styles.perfilWeb}>
        {user.logged ? (
         <div className={styles.profileWrapper}>
        
         <button onClick={() => setShowDropdown(!showDropdown)}>
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
                <Image src={user.data.photo} alt="User Photo" width={100} height={100} />
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
