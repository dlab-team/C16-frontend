import Breadcumbs from "../comentario/[id]/components/Breadcumbs/Breadcumbs"
import Post from "../components/Post/Post"
import SearchBar from "../components/SearchBar/SearchBar"
import styles from './busqueda.module.css'
import { searchByKeyword } from "@/services/api/api.post.service"
import SearchPagination from "./components/SearchPagination/SearchPagination"


async function Busqueda({ searchParams }) {
    const {search, page} = searchParams

    const {data, pagination} =  await searchByKeyword(search, page)
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
                    <p className={styles.noPosts}>No hay resultados con respecto a la información buscada.</p>
                    :
                    data.map((post)=> <Post key={post.id} data={post} type="publications"/> )
                }
            </div>



            <SearchPagination data={pagination} search={search} />
        </section>

        </>
    )
}

export default Busqueda
