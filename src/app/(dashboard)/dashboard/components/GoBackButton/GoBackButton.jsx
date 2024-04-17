'use client'
import { useRouter } from 'next/navigation'
import { AiOutlineLeft } from 'react-icons/ai'
import styles from './styles/GoBackButton.module.css'

const GoBackButton = () => {
  const router = useRouter()
  return (
    <button className={styles.goBackButton} onClick={() => router.back()}>
      <AiOutlineLeft size={22} />
    </button>
  )
}

export default GoBackButton
