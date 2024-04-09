import { SaveButton } from '..'
import {
  CustomCalendarView,
  GenderChoiceView,
  InputsContainerView,
  SelectOptionsView,
} from './components'
import styles from './styles/YourDataView.module.css'

const YourDataView = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Tus datos</h4>
      <div className={styles.inputsContainer}>
        <InputsContainerView />
        <CustomCalendarView />
        <GenderChoiceView />
        <SelectOptionsView />
      </div>
      <div className={styles.buttonContainer}>
        <SaveButton />
      </div>
    </div>
  )
}

export default YourDataView
