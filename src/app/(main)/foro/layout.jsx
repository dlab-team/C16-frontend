import GenericBanner from "../components/GenericBanner/GenericBanner"
import styles from './Foro.module.css'

const dataBanner = {
    imgUrl:"/assets/banner/foro.png",
    titleMessage:'Participa en nuestro', //mensaje que va en el titulo
    titleEmphasis:'Foro', // el enfasis del texto que va color azul
    message:'Qorem ipsum dolor sit amet, consectetur adipiscing elit.', //mensaje del banner
}

function layout({ children }) {
    return (
        <main className={styles.main}>
            <GenericBanner resource={dataBanner}/>
            <>{children}</>
        </main>
    )
}

export default layout
