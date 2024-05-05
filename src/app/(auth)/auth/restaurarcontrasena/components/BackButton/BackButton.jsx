'use client'

import { useRouter } from 'next/navigation'
import styles from './BackButton.module.css'
function BackButton() {
    const router = useRouter()
    return (
        <button 
        className={styles.backBtn}
        onClick={() => router.back()}
        >
            <span className={styles.hide}>back</span>
        </button>
    )
}

export default BackButton
