'use client'

import { useRouter } from 'next/navigation'
import styles from './Breadcumbs.module.css'

function Breadcumbs({message= "Foro"}) {
    const router = useRouter()
    return (
        <button className={styles.breadcumbs} onClick={() => router.back()}>
            <div className={styles.arrowIcon}></div>
            <span className={styles.breadcumbsTitle}>{message}</span>
        </button>
    )
}

export default Breadcumbs
