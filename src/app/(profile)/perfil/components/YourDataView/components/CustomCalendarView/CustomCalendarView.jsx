'use client'
import { forwardRef, useState } from 'react'
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

const CustomCalendarView = () => {
  const [startDate, setStartDate] = useState(new Date())
  registerLocale('es', es)

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={styles.calendarButtonContainer}>
      <button className={styles.buttonCalendar} onClick={onClick} ref={ref}>
        {value}
      </button>
      <AiOutlineCalendar className={styles.icon} />
    </div>
  ))

  return (
    <label htmlFor="calendar" className={inputStyles.label}>
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
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
        calendarClassName={styles.calendar}
        locale="es"
      />
    </label>
  )
}

export default CustomCalendarView
