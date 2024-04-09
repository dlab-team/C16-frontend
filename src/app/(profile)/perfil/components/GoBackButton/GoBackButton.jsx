import { AiOutlineLeft } from 'react-icons/ai'
import styles from './styles/GoBackButton.module.css'

const GoBackButton = ({ handleGoBack }) => {
  return (
    <button className={styles.button} onClick={handleGoBack}>
      <AiOutlineLeft size={22} />
    </button>
  )
}

export default GoBackButton
