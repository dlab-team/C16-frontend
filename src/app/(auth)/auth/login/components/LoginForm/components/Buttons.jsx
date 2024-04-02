import Link from 'next/link';
import styles from '../../../styles/Buttons.module.css';
import { GoogleIcon, GoogleIconForDesktop } from '../icons';
import {signIn, signInWithGoogle} from '../LoginForm';

function Buttons() {
  
  return (
    <>
      <div className={styles.hrContainer}>
        <hr className={styles.hr} />
        o
        <hr className={styles.hr} />
      </div>
      <button className={styles.loginButton}>
        Ingresar
      </button>
      <button className={styles.socialNetworkButton} onClick={()=> signInWithGoogle}>
        Continuar con Google
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
