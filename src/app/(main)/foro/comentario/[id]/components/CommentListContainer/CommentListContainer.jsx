import CommentContainer from '../CommentContainer/CommentContainer'
import PaginationReplies from '../PaginationReplies/PaginationReplies'
import styles from './CommentListContainer.module.css'

async function CommentListContainer({data, pagination, postId}) {
    return (
        <section className={styles.commentListContainer}>
            <div className={styles.commentList} role='list'>
                {data.replies.map((comment) => <CommentContainer key={comment.id} data={comment}/>)}
            </div>

            <PaginationReplies data={pagination} postId={postId}/>

        </section>
    )
}

export default CommentListContainer
