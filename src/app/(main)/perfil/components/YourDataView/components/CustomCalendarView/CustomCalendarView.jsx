'use client'


import DatePicker, { setDefaultLocale, registerLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css'
import './styles/ReactCalendar.styles.css'
import inputStyles from '../InputsContainerView/styles/InputsContainerView.module.css'
import { useState } from 'react';

const minDate = () => {
  const today = new Date()
  const date = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )
  return date
}
const maxDate = () => {
  const today = new Date()
  const date = new Date(
    today.getFullYear() - 90,
    today.getMonth(),
    today.getDate()
  )
  return date
}
const dateToISO = (original) => {
  const dateObject = new Date(`${original}T00:00:00`);
  const isoDate = dateObject.toISOString()
  return isoDate
}

const CustomCalendarView = ({ values, setValues }) => {
  const [fecha, setFecha] = useState(dateToISO(values.birthday))
  registerLocale('es', es)
  setDefaultLocale('es')

  const handleDate = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const formattedMonth = month < 10 ? `0${month}` : month
    const formattedDay = day < 10 ? `0${day}` : day

    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`

    setValues((prevValues) => ({
      ...prevValues,
      ["birthday"]: formattedDate,
    }));

    setFecha(date)
  }

  return (
    <label
      htmlFor="calendar"
      className={inputStyles.labelTwo}
    >
      Fecha de nacimiento
      <DatePicker
        selected={fecha}
        onChange={(date) => handleDate(date)}
        showYearDropdown
        locale="es"
        dateFormatCalendar="MMM"
        yearDropdownItemphone={100}
        scrollableYearDropdown
        minDate={maxDate()}
        maxDate={minDate()}
        showIcon
        required
      />
    </label>
  )
}

export default CustomCalendarView
