import GenericBanner from "../components/GenericBanner/GenericBanner"
import styles from './Foro.module.css'

const dataBanner = {
    imgUrl:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FimgForo2.png?alt=media&token=aa4095cc-47f5-4c4e-9854-7921c7f07eac",
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
