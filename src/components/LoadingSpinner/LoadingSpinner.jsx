
import styles from './LoadingSpinner.module.css'

function LoadingSpinner() {
    return (
        <body className={styles.body}>
            <div className={styles.loading}></div>
            
            <h1 className={styles.title}>loading</h1>
        </body>
    )
}

export default LoadingSpinner
