import { SaveButton } from '..'
import inputStyles from '../YourDataView/components/InputsContainerView/styles/InputsContainerView.module.css'
import titleStyles from '../YourDataView/styles/YourDataView.module.css'
import styles from './styles/ChangePasswordView.module.css'

const ChangePasswordView = () => {
  return (
    <div className={titleStyles.container}>
      <h4 className={titleStyles.title}>Cambiar contraseña</h4>
      <div className={styles.inputsContainer}>
        <label htmlFor="password" className={inputStyles.label}>
          Contraseña actual
          <input
            type="password"
            id="password"
            name="password"
            placeholder="******"
            className={inputStyles.input}
          />
        </label>
        <label htmlFor="newPassword" className={inputStyles.label}>
          Nueva contraseña
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="******"
            className={inputStyles.input}
          />
        </label>
        <label htmlFor="repeatPassword" className={inputStyles.label}>
          Repetir contraseña
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            placeholder="******"
            className={inputStyles.input}
          />
        </label>
        <div className={styles.buttonContainer}>
          <SaveButton />
        </div>
      </div>
    </div>
  )
}

export default ChangePasswordView
