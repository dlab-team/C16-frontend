import Image from 'next/image'
import styles from './commentContainer.module.css'
import Comment from '../Comment/Comment'

function CommentContainer({data}) {
    return (

        <div className={styles.commentContainer} role='listitem'>
           {/*  <Image className={styles.commentlineImg} width={100} height={100} src={'/assets/images/foro/commentLine.svg'} alt='' /> */}

            <Comment data={data}/>
        </div>

    )
}

export default CommentContainer
