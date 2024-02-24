'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/NavView.module.css';
import { ROUTES_INFO } from './constants';
import { MenuIcon } from './icons';
import { useNavView } from './hook';
import { LoginButton } from './components';

const NavView = () => {
  const { pathname, toggleMenu } = useNavView();

  return (
    <header className={styles.navContainer}>
      <Link href='/' className={styles.logoContainer}>
        <Image
          src='/assets/logo-ronda.svg'
          alt='logo Ronda'
          width={53}
          height={53}
          loading='lazy'
          className={styles.logo}
        />
      </Link>
      <nav id='navContainer' className={styles.nav}>
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
      </nav>
      <div className={styles.buttonsContainer}>
        <LoginButton />
        <button onClick={toggleMenu} className={styles.menuButton}>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default NavView;
