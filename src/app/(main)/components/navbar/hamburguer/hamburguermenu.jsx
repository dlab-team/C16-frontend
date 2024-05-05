import { useState } from 'react';
import { IoIosMenu, IoIosClose } from "react-icons/io";
import styles from './styles/hamburguermenu.module.css';
import { useRouter } from 'next/navigation';

const Hamburguermenu = ({ toggleMenu, navigateAboutus,  navigateCare,  navigateacademy,  navigateforo,  navigatehome,navigateRegister }) => {
  const [showUseClient, setShowUseClient] = useState(false);

  const toggleUseClient = () => {
    setShowUseClient(!showUseClient);
  };

  
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className={styles.drawer}>
      <button className={styles.toggle} onClick={() => { toggleMenu(); toggleUseClient(); }}>
        {showUseClient ? <IoIosClose /> : <IoIosMenu />}
      </button>

      {showUseClient && (
        <div className={styles.menu}>
          <ul className={styles.pages}>
            <li className={styles.topmenu}>
             
              Para tener una mejor experiencia, <button  className={` ${pathname === '/auth/register' && styles.active}`} onClick={navigateRegister}>regístrate</button> con nosotros.
            </li>
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
        <button className={` ${pathname === '/foro' && styles.active}`} onClick={navigateforo}>Iniciar secion</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburguermenu;
