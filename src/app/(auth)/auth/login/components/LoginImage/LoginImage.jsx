import Image from 'next/image';
import styles from '../../styles/LoginImage.module.css';

function LoginImage() {
  return (
    <article className={styles.img}>
      <Image
        src="/assets/img/login-image.webp"
        width={510}
        height={510}
        alt="pintura de corazón"
        loading="lazy"
      />
    </article>
  );
}

export default LoginImage;
