
import CommentContainer from '../CommentContainer/CommentContainer'
import styles from './CommentListContainer.module.css'

const data = { id:0, nombre: "Diego Fernández", region: "costa Rica", fecha: "2/2/2024", mensaje: "¿Cómo puedo tramitar el Carné de Cuidador? Gracias", imagen: "" }

function CommentListContainer() {
    return (
        <section className={styles.commentListContainer}>
            <div className={styles.commentList} role='list'>
                <CommentContainer data={data}/>
                <CommentContainer data={data}/>
                <CommentContainer data={data}/>
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
    )
}

export default CommentListContainer
