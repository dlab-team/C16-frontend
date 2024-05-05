import styles from './LoadingForo.module.css'

function LoadingForo() {
    return (
        <div className={styles.container}>
            <h3 className={styles.message}>Cargando ....</h3>
        </div>
    )
}

export default LoadingForo
