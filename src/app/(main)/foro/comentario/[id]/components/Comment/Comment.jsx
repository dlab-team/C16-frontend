
import Image from 'next/image'
import styles from './Comment.module.css'
import PostToggle from '@/app/(main)/foro/components/PostToggle/PostToggle'

function Comment({data}) {
    if (!data.imagen) { data.imagen = "/assets/images/foro/noneImage.svg" }
    return (
        <div className={styles.postBox}>
            <div className={styles.postHeader}>
                <Image width={100} height={100} className={styles.imageHeader} alt='imagen de usuario' src={data.imagen} onError={"/assets/images/foro/noneImage.svg"}></Image>
                <span className={styles.authorInfo}>
                    <strong className={styles.strong}>{data.nombre + ", "}</strong>
                    {data.region} - RM
                </span>
            </div>

            <p className={styles.message}>{data.mensaje}</p>

            <PostToggle data={data} type={'publications'} />
        </div>
    )
}

export default Comment
