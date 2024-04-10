import inputStyles from '../InputsContainerView/styles/InputsContainerView.module.css'
import styles from './styles/GenderChoiceView.module.css'

const GenderChoiceView = () => {
  return (
    <label htmlFor="name" className={inputStyles.label}>
      Género
      <div className={styles.buttonsContainer}>
        <button className={styles.genderButton}>Hombre</button>
        <button className={styles.genderButton}>Mujer</button>
        <button className={styles.genderButton}>Otro</button>
      </div>
    </label>
  )
}

export default GenderChoiceView
