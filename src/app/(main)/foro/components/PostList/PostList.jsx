import { getAllPosts, getByComuna } from "@/services/api/api.post.service"

import ComunaFilters from "../ComunaFilters/ComunaFilters"
import Pagination from "../Pagination/Pagination"
import Post from "../Post/Post"
import styles from './PostList.module.css'

async function PostList({category, searchParams}) {
    const {page, comuna} = searchParams
    let publications = {}

    if(category == "actividad"){
        publications =  await getAllPosts(page)
    }else if(category == "comuna"){
        publications = await getByComuna(page, comuna)
    }else{
        publications =  await getAllPosts(page)
    }

    return (
        <>
            {category =='comuna'
            &&
            <ComunaFilters page={page} />
            }
            <div role="list" className={styles.postList}>
                {publications.data?.map((post)=> <Post key={post.id} data={post} type="publications"/> )}
            </div>

            <Pagination data={publications.pagination} />
            {/* {category =='comuna'?
            <PaginationComuna data={publications.pagination} comuna={comuna}/>
            :
            <Pagination data={publications.pagination}/>
            } */}

        </>
    )
}

export default PostList
