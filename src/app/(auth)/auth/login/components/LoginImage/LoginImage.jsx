import Image from 'next/image';
import styles from '../../styles/LoginImage.module.css';

function LoginImage() {
  return (
    <article className={styles.img}>
      <Image
        // src="/assets/img/login-image.webp"
        src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fmanos-unidas-login.png?alt=media&token=d198f46b-3108-42b2-b132-436abb7d9816"
        width={510}
        height={510}
        loading="lazy"
      />
    </article>
  );
}

export default LoginImage;
