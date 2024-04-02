import CommentContainer from '../CommentContainer/CommentContainer'
import styles from './CommentListContainer.module.css'

async function CommentListContainer({data}) {
    return (
        <section className={styles.commentListContainer}>
            <div className={styles.commentList} role='list'>
                {data.replies.map((comment) => <CommentContainer key={comment.id} data={comment}/>)}
            </div>

            <div className={styles.pagination}>
                <span>Pag</span>

                <select name="select" id="" className={styles.select}>
                    <option value="value1">1</option>
                    <option value="value1">2</option>
                    <option value="value1">3</option>
                    <option value="value1">4</option>
                </select>

                <span>de 10</span>
            </div>

        </section>
    )
}

export default CommentListContainer
