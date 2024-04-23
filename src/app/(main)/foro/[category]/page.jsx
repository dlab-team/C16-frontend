import Publications from "../components/Publications/Publications"
import styles from './Foro.module.css'
function Foro({params, searchParams}) {

    return (
        <section className={styles.main}>
            <Publications category={params.category} searchParams={searchParams}/>

        </section>
    )
}

export default Foro
