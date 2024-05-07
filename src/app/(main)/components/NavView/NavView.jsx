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
          src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FRNC_Horizontal_Color.png?alt=media&token=7d7203c1-39ce-4e3f-b560-e7194ea0f8ac"
          alt='logo Ronda'
          width={188}
          height={108}
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
