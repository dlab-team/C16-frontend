'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/NavView.module.css';
import { ROUTES_INFO } from './constants';
import { MenuIcon } from './icons';
import { useNavView } from './hook';

const NavView = () => {
  const { pathname, toggleMenu } = useNavView();

  return (
    <header className={styles.navContainer}>
      <Image
        src="/assets/logo-ronda.svg"
        alt="logo Ronda"
        width={53}
        height={53}
        loading="lazy"
        className={styles.logo}
      />
      <nav id="navContainer" className={styles.nav}>
        {ROUTES_INFO.map((route) => (
          <Link
            className={`${styles.link} ${
              pathname === route.pathname && styles.active
            }`}
            href={route.pathname}
            onClick={toggleMenu}
            key={route.id}
          >
            {/* ToDo: Do all items have an icon or none? */}
            {/* {pathname === route.pathname && route.icon} */}
            {route.title}
          </Link>
        ))}
        <Image
          src="https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg"
          alt="user profile"
          width={30}
          height={30}
          loading="lazy"
          className={styles.profileImage}
        />
      </nav>
      <div className={styles.buttonsContainer}>
        <button className={styles.loginButton}>Ingresar</button>
        <button onClick={toggleMenu} className={styles.menuButton}>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default NavView;
