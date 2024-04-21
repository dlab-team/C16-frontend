import styles from './ComunaFilters.module.css'

function ComunaFilters() {

    return (
        <form className={styles.filterForm}>
            <label htmlFor="selectRegion" className={styles.inputLabel}></label>
            <select
                type="text"
                className={styles.selectRegion}
                id='selectRegion'
            >
                <option value="">Región</option>
            </select>


            <label htmlFor="selectComuna" className={styles.inputLabel}></label>
            <select
                type="text"
                className={styles.selectComuna}
                id='selectComuna'
            >
                <option value="">Comuna</option>
            </select>

            <div className={styles.buttonBox}>
                <button className={styles.searchBtn}>Buscar</button>
            </div>

        </form>
    )
}

export default ComunaFilters
