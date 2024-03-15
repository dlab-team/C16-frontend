import Post from "../../components/Post/Post"
import styles from "./comment.module.css"

import Breadcumbs from "./components/Breadcumbs/Breadcumbs"

const data = { id:0, nombre: "Diego Fernández", region: "costa Rica", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" }

function Comment({params}) {
    const {id}= params
    data.id = id

    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <Breadcumbs />

                <h2 className={styles.subTitle}>Comentarios</h2>
            </section>

            <section className={styles.postBox}>
                <Post data={data} type='detail' />
            </section>

            comentarios:{id}
        </main>
    )
}

export default Comment
