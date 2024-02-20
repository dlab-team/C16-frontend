import Link from 'next/link';
import styles from '../../../styles/Buttons.module.css';
import { GoogleIcon, GoogleIconForDesktop } from '../icons';

function Buttons() {
  return (
    <>
      <div className={styles.hrContainer}>
        <hr className={styles.hr} />
        o
        <hr className={styles.hr} />
      </div>
      <input
        type="button"
        value="Ingresar"
        name="ingresar"
        className={styles.loginButton}
      />
      <button className={styles.socialNetworkButton}>
        Conectar con Google
        <i className={styles.googleIconForMobile}>
          <GoogleIcon />
        </i>
        <i className={styles.googleIconForDesktop}>
          <GoogleIconForDesktop />
        </i>
      </button>
      <Link href="#" className={styles.forgotMyPassword}>
        Olvidé mi contraseña
      </Link>
      <p className={styles.p}>
        ¿No tienes cuenta?{' '}
        <Link href="#" className={styles.link}>
          Regístrate
        </Link>
      </p>
    </>
  );
}

export default Buttons;
