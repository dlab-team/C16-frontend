import Link from 'next/link';
import styles from '../../styles/TopWave.module.css';

function TopWave() {
  return (
    <div className={styles.topWaveContainer}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 390 172"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M384.818 124.151C403.353 109.494 406.553 96.4685 406.553 96.4685L390.058 -71.9999L188.359 -51.3593L-15.9136 -31.3584L-0.576731 125.28C77.1461 81.5955 162.474 88.53 244.676 119.057C284.053 133.681 349.099 152.397 384.818 124.151Z"
          fill="#FFD9ED"
        />
      </svg>
      <Link href="#" className={styles.backIcon}>
        <svg
          width="52"
          height="32"
          viewBox="0 0 52 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8479 15.0576C14.5979 15.3076 14.4575 15.6467 14.4575 16.0002C14.4575 16.3538 14.5979 16.6929 14.8479 16.9429L22.3906 24.4856C22.642 24.7285 22.9788 24.8628 23.3284 24.8598C23.678 24.8568 24.0125 24.7165 24.2597 24.4693C24.5069 24.2221 24.6471 23.8877 24.6501 23.5381C24.6532 23.1885 24.5188 22.8517 24.2759 22.6002L19.0092 17.3336L36.6666 17.3336C37.0202 17.3336 37.3593 17.1931 37.6094 16.943C37.8594 16.693 37.9999 16.3539 37.9999 16.0002C37.9999 15.6466 37.8594 15.3075 37.6094 15.0574C37.3593 14.8074 37.0202 14.6669 36.6666 14.6669L19.0092 14.6669L24.2759 9.40024C24.5188 9.14877 24.6532 8.81197 24.6501 8.46237C24.6471 8.11277 24.5069 7.77836 24.2597 7.53115C24.0124 7.28394 23.678 7.14371 23.3284 7.14067C22.9788 7.13764 22.642 7.27203 22.3906 7.51491L14.8479 15.0576Z"
            fill="#D6006E"
          />
        </svg>
      </Link>
    </div>
  );
}

export default TopWave;
