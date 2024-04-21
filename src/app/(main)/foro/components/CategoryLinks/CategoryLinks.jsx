import Link from 'next/link'
import styles from './CategoryLinks.module.css'

const categoryList = ["recientes", "comuna", "actividad"];
const categoryNames = {
    recientes: "Más recientes",
    comuna: "Mi comuna",
    actividad: "Mi actividad"
}

function CategoryLinks({ category }) {
    
    // Verificar si la categoría está dentro de categoryList, si no, asignar "recientes"
    if (!categoryList.includes(category)) {
        category = "recientes"
    }

    return (
        <nav className={styles.categoryContainer}>
            {categoryList.map((item) => (
                <Link
                    key={item}
                    href={`/foro/${item}`}
                    className={category === item ? styles.itemSelected : styles.itemNav} // Aplica el className directamente aquí
                    passHref // Se asegura de que el enlace sea accesible y funcione correctamente
                >
                    {categoryNames[item]}
                </Link>
            ))}
        </nav>
    )
}

export default CategoryLinks

