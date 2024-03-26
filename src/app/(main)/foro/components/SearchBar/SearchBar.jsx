'use client'

import { useRouter } from 'next/navigation';
import styles from './SearchBar.module.css'
function SearchBar() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Obtiene el valor del input de búsqueda
        console.log(e.target.elements.search.value)
        const searchTerm = `${e.target.elements.search.value}`;

        // Navega a la ruta deseada, incluyendo el término de búsqueda como query parameter
        router.push(`/foro/busqueda?search=${searchTerm}`);
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input  
                name="search"
                className={styles.input}
                type="text"
                placeholder="Carnét"
                required/>
            <button className={styles.searchIcon}></button>
            <div className={styles.filterIcon}></div>
        </form>
    )
}

export default SearchBar
