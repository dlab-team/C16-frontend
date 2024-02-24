import Image from 'next/image';
import styles from '../styles/LoginButton.module.css';
import { useNavView } from '../hook';
import { ProfileDesktopIcon, ProfileMobileIcon } from '../icons';

function LoginButton() {
  const { isAuthenticated, handleLogin } = useNavView();

  return (
    <button className={styles.loginButton} onClick={handleLogin}>
      {isAuthenticated ? (
        <Image
          src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg'
          alt='user profile'
          width={45}
          height={40}
          loading='lazy'
          className={styles.profileImage}
        />
      ) : (
        <>
          <i className={styles.profileMobileIcon}>
            <ProfileMobileIcon />
          </i>
          <i className={styles.profileDesktopIcon}>
            <ProfileDesktopIcon />
          </i>
        </>
      )}
    </button>
  );
}

export default LoginButton;
