
import styles from './Publications.module.css'
import CategoryLinks from '../CategoryLinks/CategoryLinks'
import PostList from '../PostList/PostList'

function Publications({category}) {

    return (
        <section className={styles.publications}>

            <div className={styles.addCommentBox}>
                <span className={styles.addCommentSpam}>Añade tu comentario</span>
                <div className={styles.penIcon}></div>
            </div>

            <div className={styles.inputContainer}>
                <form className={styles.inputBox}>
                    <input className={styles.commentInput} type="text" placeholder='Escribe tu comentario' />
                    <button className={styles.sendIcon}></button>
                </form>
            </div>

            <h2 className={styles.subTitle}>Publicaciones</h2>

            <CategoryLinks category={category}/>

            <section className={styles.boxPublications}>
                <PostList category={category}/>
            </section>
        </section>
    )
}

export default Publications
