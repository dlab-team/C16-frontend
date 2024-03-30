import PostImage from '../PostImage/PostImage'
import PostToggle from '../PostToggle/PostToggle'
import styles from './Post.module.css'

function Post({ data, type }) {

    if (!data.user.photo) { data.user.photo = "/assets/images/foro/noneImage.svg" }
    return (

        <div className={styles.postBox} role="listitem">
            <div className={styles.postHeader}>
                <PostImage
                    width={100}
                    height={100}
                    className={styles.imageHeader}
                    src={data.user.photo}
                    alt='imagen de usuario'
                />

                <span className={styles.authorInfo}>
                    <strong className={styles.strong}>{`${data.user.firstname} ${data.user.lastname} -`}</strong>
                    {data.user.region} - {data.user.comuna}
                </span>
            </div>

            <p className={styles.message}>{data.content}</p>

            <PostToggle data={data} type={type} />
        </div>

    )
}

export default Post
