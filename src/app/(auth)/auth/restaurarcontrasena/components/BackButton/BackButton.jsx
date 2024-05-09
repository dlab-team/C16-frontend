'use client'

import { useRouter } from 'next/navigation'
import styles from './BackButton.module.css'
function BackButton() {
    const router = useRouter()
    return (
        <a href="/auth/login">
            <button 
            className={styles.backBtn}
            >
                <span className={styles.hide}>back</span>
            </button>
        </a>
    )
}

export default BackButton
