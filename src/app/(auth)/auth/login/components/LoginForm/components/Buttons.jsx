import Link from 'next/link';
import styles from '../../../styles/Buttons.module.css';
import { GoogleIcon } from '../icons';

function Buttons() {
  return (
    <>
      <div className={styles.hrContainer}>
        <hr className={styles.hr} />
      </div>
      <input
        type="button"
        value="Ingresar"
        name="ingresar"
        className={styles.loginButton}
      />
      <button className={styles.socialNetworkButton}>
        Ingresar con Google
        <GoogleIcon />
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
