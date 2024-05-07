'use client';
import Link from 'next/link';
import styles from '../../../styles/Buttons.module.css';
import { GoogleIcon, GoogleIconForDesktop } from '../icons';
import { isMobile } from 'react-device-detect';
import { infoMessage } from '@/utils/notify';

function Buttons({ methods }) {
  const { handleAuthGoogle } = methods

  const handleGoogle = () => {
    if(isMobile){
      infoMessage("Método de autenticación NO válida para dispositivos móviles")
    }else{
      handleAuthGoogle();
    }
  }

  return (
    <>
      <button className={styles.loginButton} type="submit">
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
      <Link href="/auth/restaurarcontrasena" className={styles.forgotMyPassword}>
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
