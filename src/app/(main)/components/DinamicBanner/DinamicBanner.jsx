import Image from 'next/image';
import styles from './DinamicBanner.module.css';

function DinamicBanner({ imageSrc, title, message, customStyles }) {
    return (
        <section className={`${styles.banner} ${customStyles.banner}`} role='banner'>
            <Image width={100} height={100} alt='banner image' src={imageSrc} className={`${styles.bannerImg} ${customStyles.bannerImg}`} />
            <div className={`${styles.bannerTextBox} ${customStyles.bannerTextBox}`}>
                <div className={styles.textBox}>
                    <h1 className={`${styles.bannerTitle} ${customStyles.bannerTitle}`}>{title}</h1>
                    <span className={`${styles.bannerMessage} ${customStyles.bannerMessage}`}>{message}</span>
                </div>
            </div>
        </section>
    );
}

export default DinamicBanner;