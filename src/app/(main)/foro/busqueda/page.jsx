import Breadcumbs from "../comentario/[id]/components/Breadcumbs/Breadcumbs"
import Post from "../components/Post/Post"
import SearchBar from "../components/SearchBar/SearchBar"

import styles from './busqueda.module.css'

// Simula los datos
const posts = [
    { id:1, nombre: "barbara gutierrez", region: "Venezuela", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
    { id:2, nombre: "paula Mendez", region: "colombia", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
    { id:3, nombre: "Macarena Ramdorh", region: "cHilE", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
    { id:4,nombre: "Ingrid morales", region: "chile", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
    { id:5, nombre: "sebasTian güiza", region: "colombia", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
]

function Busqueda() {
    return (
        <>
        <section className={styles.busquedaContainer}>
            <Breadcumbs message="Atrás" />
            <SearchBar />
        </section>


        <section className={styles.listContainer}>

            <div className={styles.resultList} role="list">
                {posts.map((post)=> <Post key={post.id} data={post} type="publications"/> )}
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

        </>
    )
}

export default Busqueda
