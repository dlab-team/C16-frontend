import Post from "../../components/Post/Post"
import styles from "./commentPage.module.css"
import Breadcumbs from "./components/Breadcumbs/Breadcumbs"
import CommentListContainer from "./components/CommentListContainer/CommentListContainer"
import { getPostById } from "@/services/api/api.post.service"

async function Comment({ params, searchParams }) {
    const { id } = params
    const { page } = searchParams

    const response = await getPostById(id, page)

    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <Breadcumbs />

                <h2 className={styles.subTitle}>Comentarios</h2>
            </section>

            <section className={styles.postBox}>
                <Post data={response.data} type='detail' />
            </section>

            <CommentListContainer data={response.data} pagination={response.pagination} postId={id}/>
        </main>
    )
}

export default Comment
