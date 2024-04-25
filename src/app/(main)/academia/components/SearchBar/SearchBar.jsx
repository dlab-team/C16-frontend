'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './styles/SearchBar.module.css'

const SearchBar = () => {
  const router = useRouter()
  const [value, setValue] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    router.push(`/academia/?page=1&search=${value}`)
    setValue('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} >
        <input type="search" placeholder="Buscar tema" className={styles.inputTwo} required onChange={(e) => setValue(e.target.value)}/>
        <button className={styles.searchIcon}></button>
    </form>
  )
}

export default SearchBar
