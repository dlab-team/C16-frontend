import Image from 'next/image'
import styles from './Banner.module.css'

function Banner() {
    return (
        <div className={styles.banner} role='banner'>
            <Image width={100} height={100} alt='banner image' src='/assets/images/foro/banner_img.png' className={styles.bannerImg}/>
            <div className={styles.bannerTextBox}>
                <div className={styles.textBox}>
                    <h1 className={styles.bannerTitle}>Participa en nuestro <strong className={styles.titleStrong}>Foro</strong></h1>
                    <span className={styles.bannerMessage}>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
