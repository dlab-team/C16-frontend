'use client'

import { useEffect, useState } from 'react'
import styles from './PaginationReplies.module.css'
import { useRouter } from 'next/navigation'

function PaginationReplies({ data, postId }) {
    const currentPage = data.currentPage
    const totalPages = data.totalPages

    const [value, setValue] = useState(currentPage)
    const router = useRouter()

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    const handlePageChange = (event) => {
        const newValue = parseInt(event.target.value)
        setValue(newValue)
    }

    useEffect(()=>{
        router.push(`/foro/comentario/${postId}/?page=${value}`)
    }, [value])


    return (
        <>
            <div className={styles.pagination}>
                <span>Pag</span>

                <select name="select" id="" className={styles.select} onChange={handlePageChange}>
                    {pages.map((pageNumber) => (
                        <option key={pageNumber} value={pageNumber}>
                            {pageNumber}
                        </option>
                    ))}

                </select>

                <span>de {totalPages}</span>

            </div>

        </>
    )
}

export default PaginationReplies