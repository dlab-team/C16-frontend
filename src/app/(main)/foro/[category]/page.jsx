import Publications from "../components/Publications/Publications"
import styles from './Foro.module.css'
function Foro({params}) {
    return (
        <main className={styles.main}>
            <Publications category={params.category}/>

        </main>
    )
}

export default Foro
