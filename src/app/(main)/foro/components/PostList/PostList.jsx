import ComunaFilters from "../ComunaFilters/ComunaFilters"
import Pagination from "../Pagination/Pagination"
import Post from "../Post/Post"
import styles from './PostList.module.css'
import { getAllPosts } from "@/services/api/api.post.service"


// Simula la llamada a una API -- Actualizar
const llamadaAPI = async (categoria, page) =>{
    let response = {}
    let posts = {}
    if(categoria == "actividad"){
        return getAllPosts()
    }else if(categoria == "comuna"){
        response = await fetch("https://c16-backend.onrender.com/api/posts")
        posts = await response.json()
        return posts.data
    }
    return getAllPosts(page)
}

async function PostList({category, searchParams}) {
    const {page} = searchParams
    const publications = await llamadaAPI(category, page)

    return (
        <>
            {category =='comuna'
            &&
            <ComunaFilters />
            }
            <div role="list" className={styles.postList}>
                {publications.data.map((post)=> <Post key={post.id} data={post} type="publications"/> )}
            </div>

            <Pagination data={publications.pagination} />
        </>
    )
}

export default PostList
