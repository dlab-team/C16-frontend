import Link from 'next/link';
import styles from '../../../styles/Buttons.module.css';
import { GoogleIcon } from '../icons';

function Buttons() {
  return (
    <>
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
    </>
  );
}

export default Buttons;
