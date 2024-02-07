'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './styles/NavView.module.css';
import { ROUTES_INFO } from './constants';

const NavView = () => {
  const pathname = usePathname();

  return (
    <header className={styles.navContainer}>
      <nav className={styles.nav}>
        {ROUTES_INFO.map((route) => (
          <Link
            className={`${styles.link} ${
              pathname === route.pathname && styles.active
            }`}
            href={route.pathname}
            key={route.id}
          >
            {pathname === route.pathname && route.icon}
            {route.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default NavView;
