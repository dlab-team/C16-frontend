import PostImage from '../PostImage/PostImage'
import PostToggle from '../PostToggle/PostToggle'
import styles from './Post.module.css'

async function Post({ data, type }) {
    return (

        <div className={styles.postBox} role="listitem">
            <div className={styles.postHeader}>
                <PostImage
                    width={100}
                    height={100}
                    className={styles.imageHeader}
                    src={data.user.photo || "https://firebasestorage.googleapis.com/v0/b/dropbox-clone-736fa.appspot.com/o/users%2Fuser_2aNC9F2HWDn5x5KjMBi9Y9ywEQX%2Ffiles%2Fdefaultprofile.png?alt=media"}
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
