import Banner from "./components/Banner/Banner"
import styles from './Foro.module.css'


function layout({ children }) {
    return (
        <>
            <main className={styles.main}>
                <Banner />
                <>{children}</>
            </main>
        </>

    )
}

export default layout
