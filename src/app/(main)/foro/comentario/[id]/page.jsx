import Post from "../../components/Post/Post"
import styles from "./commentPage.module.css"
import Breadcumbs from "./components/Breadcumbs/Breadcumbs"
import CommentListContainer from "./components/CommentListContainer/CommentListContainer"

const getPostById = async (id) =>{
    const response = await fetch(`https://c16-backend.onrender.com/api/posts/${id}`)

    if(!response.ok){
        throw new Error("Error al obtener el post, puede que haya sido eliminado")
    }

    const info = await response.json()

    console.log(info) 

    return info
}

async function Comment({params}) {
    const {id}= params

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

            <CommentListContainer />
        </main>
    )
}

export default Comment
