'use client'

import { useRouter } from 'next/navigation';
import styles from './SearchBar.module.css'
function SearchBar() {
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchTerm = `${e.target.elements.search.value}`

        router.push(`/foro/busqueda?search=${searchTerm}`)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input  
                name="search"
                className={styles.input}
                type="text"
                placeholder="Buscar"
                required/>
            <button className={styles.searchIcon}></button>
        </form>
    )
}

export default SearchBar
