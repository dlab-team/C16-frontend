import Breadcumbs from "../comentario/[id]/components/Breadcumbs/Breadcumbs"
import Post from "../components/Post/Post"
import SearchBar from "../components/SearchBar/SearchBar"

import styles from './busqueda.module.css'

const searchPosts = async (resouce) =>{
    const response = await fetch(`https://c16-backend.onrender.com/api/posts?search=${resouce}`, {cache:"no-store"})

    /* if(!response.ok){
        throw new Error("Error al obtener la publicación, puede que haya sido eliminado")
    } */

    const info = await response.json()

    return info
}


async function Busqueda({ searchParams }) {

    const {data, pagination} =  await searchPosts(searchParams.search)
    return (
        <>
        <section className={styles.busquedaContainer}>
            <Breadcumbs message="Atrás" />
            <SearchBar />
        </section>


        <section className={styles.listContainer}>

            <div className={styles.resultList} role="list">
                {
                    pagination.totalItems==0?
                    <p>No hay resultados con respecto a los datos enviados</p>
                    :
                    data.map((post)=> <Post key={post.id} data={post} type="publications"/> )
                }
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
