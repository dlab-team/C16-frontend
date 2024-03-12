'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/NavView.module.css';
import { ROUTES_INFO } from './constants';
import { MenuIcon } from './icons';
import { useNavView } from './hook';
import { LoginButton, NavUserInfo } from './components';

const NavView = () => {
  const { pathname, toggleMenu, isAuthenticated, handleLogin } = useNavView();

  return (
    <header className={styles.navContainer}>
      <Link href='/' className={styles.logoContainer}>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2Ficonomov-rnc.png?alt=media&token=890c66ed-e3d7-441b-8c73-40366555e6bc'
          alt='logo Ronda'
          width={53}
          height={53}
          loading='lazy'
          className={styles.logo}
        />
      </Link>
      <div id='navContainer' className={styles.navWrapper}>
        <nav className={styles.nav}>
          <NavUserInfo
            toggleMenu={toggleMenu}
            isAuthenticated={isAuthenticated}
          />
          {ROUTES_INFO.map((route) => (
            <Link
              className={`${styles.link} ${
                pathname === route.pathname && styles.active
              }`}
              href={route.pathname}
              onClick={toggleMenu}
              key={route.id}
            >
              {route.title}
            </Link>
          ))}
          <button className={styles.loginButton}>
            {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar sesión'}
          </button>
        </nav>
      </div>
      <div className={styles.buttonsContainer}>
        <LoginButton
          isAuthenticated={isAuthenticated}
          handleLogin={handleLogin}
        />
        <button onClick={toggleMenu} className={styles.menuButton}>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default NavView;
