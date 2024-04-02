
import styles from './Comment.module.css'
import PostToggle from '@/app/(main)/foro/components/PostToggle/PostToggle'
import PostImage from '@/app/(main)/foro/components/PostImage/PostImage'
import MoreDropdown from '@/app/(main)/foro/components/MoreDropdown/MoreDropdown'

function Comment({data}) {
    return (
        <div className={styles.postBox}>
            <div className={styles.postHeader}>
                <PostImage 
                width={100} height={100} 
                className={styles.imageHeader} 
                alt='imagen de usuario' 
                src={data.user.photo || "https://firebasestorage.googleapis.com/v0/b/dropbox-clone-736fa.appspot.com/o/users%2Fuser_2aNC9F2HWDn5x5KjMBi9Y9ywEQX%2Ffiles%2Fdefaultprofile.png?alt=media"}
                />

                <span className={styles.authorInfo}>
                    <strong className={styles.strong}>{`${data.user.firstname} ${data.user.lastname} -`}</strong>
                    {data.user.region} - {data.user.comuna}
                </span>

                <MoreDropdown />
            </div>

            <p className={styles.message}>{data.content}</p>

            <PostToggle data={data} type={'publications'} />
        </div>
    )
}

export default Comment
