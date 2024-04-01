import Publications from "../components/Publications/Publications"
import styles from './Foro.module.css'
function Foro({params}) {
    return (
        <section className={styles.main}>
            <Publications category={params.category}/>

        </section>
    )
}

export default Foro
