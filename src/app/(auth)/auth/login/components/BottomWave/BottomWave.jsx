import Link from 'next/link';
import styles from '../../styles/BottomWave.module.css';

function BottomWave() {
  return (
    <div className={styles.bottomWaveContainer}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 390 194"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.27316 50.3759C-14.1565 65.1667 -17.2624 78.2145 -17.2624 78.2145L0.446829 246.56L201.992 224.466L406.115 202.993L389.649 46.4688C312.243 90.7124 226.867 84.3932 144.448 54.4593C104.967 40.1203 39.7875 21.8737 4.27316 50.3759Z"
          fill="#FFD9ED"
        />
      </svg>
      <p className={styles.p}>
        ¿No tienes cuenta?{' '}
        <Link href="#" className={styles.link}>
          Regístrate
        </Link>
      </p>
    </div>
  );
}

export default BottomWave;
