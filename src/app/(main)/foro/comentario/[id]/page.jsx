import Post from "../../components/Post/Post"
import styles from "./commentPage.module.css"
import Breadcumbs from "./components/Breadcumbs/Breadcumbs"
import CommentListContainer from "./components/CommentListContainer/CommentListContainer"
import { getPostById } from "@/services/api/api.post.service"

async function Comment({ params }) {
    const { id } = params

    const post = await getPostById(id)

    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <Breadcumbs />

                <h2 className={styles.subTitle}>Comentarios</h2>
            </section>

            <section className={styles.postBox}>
                <Post data={post} type='detail' />
            </section>

            <CommentListContainer data={post} />
        </main>
    )
}

export default Comment
