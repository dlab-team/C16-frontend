import Image from 'next/image'
import styles from './Post.module.css'
import PostToggle from '../PostToggle/PostToggle'

function Post({data}) {
    if(!data.imagen){data.imagen= "/assets/images/foro/noneImage.svg"}
    return (
        <div className={styles.postBox} role="listitem">
            <div className={styles.postHeader}>
                <Image width={100} height={100} className={styles.imageHeader} alt='imagen de usuario' src={data.imagen} onError={"/assets/images/foro/noneImage.svg"}></Image>
                <span className={styles.authorInfo}>
                    <strong className={styles.strong}>{data.nombre+", "}</strong> 
                    {data.region} - RM
                </span>
            </div>

            <p className={styles.message}>{data.mensaje}</p>

            <PostToggle data={data}/>

        </div>
    )
}

export default Post
