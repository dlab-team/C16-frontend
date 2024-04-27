
import Image from 'next/image'
import styles from './GenericBanner.module.css'

function GenericBanner({resource}) {
    let {imgUrl, titleMessage, titleEmphasis, message} = resource
    if(imgUrl==''){
        imgUrl = '/assets/images/foro/banner_img.png'
    }
    return (
        <section className={styles.banner} role='banner'>
            <Image width={100} height={100} priority={true} alt='banner image' src={imgUrl} className={styles.bannerImg} />
            <div className={styles.bannerTextBox}>
                <div className={styles.textBox}>
                    <h1 className={styles.bannerTitle}>{titleMessage} <strong className={styles.titleStrong}>{titleEmphasis}</strong></h1>
                    <span className={styles.bannerMessage}>{message}</span>
                </div>
            </div>
        </section>
    )
}

export default GenericBanner
