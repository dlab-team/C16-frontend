import Image from 'next/image';
import styles from './DinamicBanner.module.css';

function DinamicBanner({ imageSrc, title, message, customStyles }) {
    return (
        <div className={`${styles.desktopContainer} ${customStyles.desktopContainer}`}>
            <section className={`${styles.banner} ${customStyles.banner}`} role='banner'>
                <Image
                 width={150}
                  height={150} 
                  alt='banner image'
                   src={imageSrc} className={`${styles.bannerImg} ${customStyles.bannerImg}`} />
            </section>

            <div className={`${styles.bannerTextBox} ${customStyles.bannerTextBox}`}>
   
                    <h1 className={`${styles.bannerTitle} ${customStyles.bannerTitle}`}>{title}</h1>
                    <span className={`${styles.bannerMessage} ${customStyles.bannerMessage}`}>{message}</span>
               
            </div>
        </div>
    );
}

export default DinamicBanner;
