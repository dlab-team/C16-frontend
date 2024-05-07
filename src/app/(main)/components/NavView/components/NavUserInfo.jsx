import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NavUserInfo.module.css';
import { CloseIcon } from '../icons';

const NavUserInfo = ({ toggleMenu, isAuthenticated }) => {
  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={toggleMenu}>
        <CloseIcon />
      </button>
      {isAuthenticated ? (
        <div className={styles.wrapper}>
          <Image
            src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg'
            alt='user profile'
            width={55}
            height={60}
            loading='lazy'
            className={styles.userImage}
          />
          <p className={styles.info}>Ana Galdames</p>
          <p className={styles.info}>ana.galdames@gmail.com</p>
          <button className={styles.profileButton}>Mi Perfil</button>
        </div>
      ) : (
        <p className={styles.p}>
          Para tener una mejor experiencia,{' '}
          <Link href='/auth' className={styles.link}>
            regístrate
          </Link>{' '}
          con nosotros.
        </p>
      )}
    </div>
  );
};

export default NavUserInfo;
