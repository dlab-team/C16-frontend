import Post from "../Post/Post"
import styles from './PostList.module.css'

// Simula la llamada a una API -- Actualizar
const llamadaAPI = async (categoria) =>{
    let response = {}
    let posts = {}
    if(categoria == "actividad"){
        response = await fetch("https://c16-backend.onrender.com/api/posts", {cache:"no-store"})
        posts = await response.json()
        return posts.data
    }else if(categoria == "populares"){
        response = await fetch("https://c16-backend.onrender.com/api/posts", {cache:"no-store"})
        posts = await response.json()
        return posts.data
    }
    response = await fetch("https://c16-backend.onrender.com/api/posts", {cache:"no-store"})
    posts = await response.json()
    return posts.data
}

async function PostList({category}) {
    const publications = await llamadaAPI(category)


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
