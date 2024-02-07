'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
    </header>
  );
};

export default NavView;
