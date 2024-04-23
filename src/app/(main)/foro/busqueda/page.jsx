import Breadcumbs from "../comentario/[id]/components/Breadcumbs/Breadcumbs"
import Post from "../components/Post/Post"
import SearchBar from "../components/SearchBar/SearchBar"
import styles from './busqueda.module.css'
import { searchByKeyword } from "@/services/api/api.post.service"


async function Busqueda({ searchParams }) {

    const {data, pagination} =  await searchByKeyword(searchParams.search)
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
