'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { RiEqualizerFill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './styles/SearchBar.module.css'

const SearchBar = () => {
  const router = useRouter()
  const [value, setValue] = useState()

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    router.push(`/academia/?page=1&title=${value}`)
    setValue('')
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit} >
      <AiOutlineSearch className={styles.leftIcon} size={22} />
        <input type="search" placeholder="Buscar tema" className={styles.input} required onChange={(e) => setValue(e.target.value)}/>
      <RiEqualizerFill className={styles.rightIcon} size={22} />
    </form>
  )
}

export default SearchBar
