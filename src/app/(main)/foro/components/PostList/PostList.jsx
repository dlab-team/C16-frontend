import ComunaFilters from "../ComunaFilters/ComunaFilters"
import Post from "../Post/Post"
import styles from './PostList.module.css'
import { getAllPosts } from "@/services/api/api.post.service"

// Simula la llamada a una API -- Actualizar
const llamadaAPI = async (categoria) =>{
    let response = {}
    let posts = {}
    if(categoria == "actividad"){
        return getAllPosts()
    }else if(categoria == "comuna"){
        response = await fetch("https://c16-backend.onrender.com/api/posts")
        posts = await response.json()
        return posts.data
    }
    return getAllPosts()
}

async function PostList({category}) {
    const publications = await llamadaAPI(category)

    return (
        <>
            {category =='comuna'
            &&
            <ComunaFilters />
            }
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
