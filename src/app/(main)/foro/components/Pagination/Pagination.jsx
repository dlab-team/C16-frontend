'use client'

import {useContext, useEffect, useState } from 'react'
import styles from './Pagination.module.css'
import { usePathname } from "next/navigation"
import { useRouter, useSearchParams } from 'next/navigation'
import { UserContext } from '@/components/context/userContext'


function Pagination({ data, comuna }) {
    const searchParams = useSearchParams()
    const search = searchParams.get('comuna')

    const {user} = useContext(UserContext)


    const pathname = usePathname()
    const { currentPage, totalPages } = data

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

        if(pathname=='/foro/comuna'){
            router.push(`${pathname}/?page=${value}&comuna=${user.data.comuna}`)
        }else{
            router.push(`${pathname}/?page=${value}`)
        }
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

export default Pagination
