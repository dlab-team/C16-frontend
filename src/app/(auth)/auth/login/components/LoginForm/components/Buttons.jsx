'use client';
import Link from 'next/link';
import styles from '../../../styles/Buttons.module.css';
import { GoogleIcon, GoogleIconForDesktop } from '../icons';

function Buttons({ methods }) {
  const { signIn, signInWithGoogle } = methods

  const handleSignIn = () => {
    signIn();
  }

  const handleGoogle = () => {
    signInWithGoogle();
  }

  return (
    <>
      <div className={styles.hrContainer}>
        <hr className={styles.hr} />
        o
        <hr className={styles.hr} />
      </div>
      <button className={styles.loginButton} type="button" onClick={() => handleSignIn()}>
        Ingresar
      </button>
      <button className={styles.socialNetworkButton} type="button" onClick={() => handleGoogle()}>
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
        <Link href="/auth/register" className={styles.link}>
          Regístrate
        </Link>
      </p>
    </>
  );
}

export default Buttons;
