import {
  AiOutlineCalendar,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai'
import DatePicker, { registerLocale } from 'react-datepicker'
import { es } from 'date-fns/locale/es'
import 'react-datepicker/dist/react-datepicker.css'
import './styles/ReactCalendar.styles.css'
import inputStyles from '../InputsContainerView/styles/InputsContainerView.module.css'
import styles from './styles/CustomCalendarView.module.css'

const CustomCalendarView = ({ inputsDisabled = false, date, onDateChange }) => {
  registerLocale('es', es)

  return (
    <label
      htmlFor="calendar"
      className={`${inputStyles.label} ${inputsDisabled && inputStyles.labelDisabled}`}
    >
      Fecha de nacimiento
      <DatePicker
        renderCustomHeader={({
          monthDate,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={styles.calendarContainer}>
            <button
              type="button"
              aria-label="Previous Month"
              className={styles.prevButton}
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <AiOutlineLeft size={'1rem'} />
            </button>
            <span className={styles.month}>
              {monthDate.toLocaleString('es-MX', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <button
              type="button"
              aria-label="Next Month"
              className={styles.prevButton}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <AiOutlineRight size={'1rem'} />
            </button>
          </div>
        )}
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        closeOnScroll={true}
        selected={date}
        onChange={onDateChange}
        toggleCalendarOnIconClick
        showIcon
        icon={<AiOutlineCalendar className={styles.icon} />}
        calendarClassName={styles.calendar}
        locale="es"
        disabled={inputsDisabled}
        value={date}
      />
    </label>
  )
}

export default CustomCalendarView
