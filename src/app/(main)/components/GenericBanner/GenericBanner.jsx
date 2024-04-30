
import Image from 'next/image'
import styles from './GenericBanner.module.css'

function GenericBanner({resource}) {
    let {imgUrl, titleMessage, titleEmphasis, message} = resource
    if(imgUrl==''){
        imgUrl = 'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FimgForo.png?alt=media&token=1b903ec8-9e7c-433b-9829-f01335554e65'
    }
    return (
        <section className={styles.banner} role='banner'>
            <Image width={100} height={100} priority alt='banner image' src={imgUrl} className={styles.bannerImg}/>
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
