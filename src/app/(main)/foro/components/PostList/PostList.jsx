import Post from "../Post/Post"
import styles from './PostList.module.css'

// Simula los datos
const recientes = [
    { id:1, nombre: "barbara gutierrez", region: "Venezuela", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
    { id:2, nombre: "paula Mendez", region: "colombia", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
    { id:3, nombre: "Macarena Ramdorh", region: "cHilE", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
]
const populares = [
    { id:4,nombre: "Ingrid morales", region: "chile", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
    { id:5, nombre: "sebasTian güiza", region: "colombia", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
]
const actividad = [
    { id:6, nombre: "Diego Fernández", region: "costa Rica", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" },
]

// Simula la llamada a una API 
const llamadaAPI = (categoria) =>{
    if(categoria == "actividad"){
        return actividad
    }else if(categoria == "populares"){
        return populares
    }
    return recientes
}

function PostList({category}) {
    const publications = llamadaAPI(category)


    return (
        <>
            <div role="list" className={styles.postList}>
                {publications.map((post)=> <Post key={post.id} data={post} type="publications"/> )}
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
        </>
    )
}

export default PostList
