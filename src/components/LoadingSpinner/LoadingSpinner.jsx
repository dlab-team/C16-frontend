import styles from './LoadingSpinner.module.css'

function LoadingSpinner() {
    return (
            <body className={styles.body}>
                <div className={styles.box}>
                    <div className={styles.loading}></div>
                    <h1 className={styles.title}>Cargando...</h1>
                </div>
            </body>
    )
}

export default LoadingSpinner
