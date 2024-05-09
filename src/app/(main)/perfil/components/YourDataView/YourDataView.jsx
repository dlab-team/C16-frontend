'use client'
import { SaveButton } from '..'
import {
  CustomCalendarView,
  InputsContainerView,
  SelectOptionsView,
} from './components'
import styles from './styles/YourDataView.module.css'
import { UserContext } from '@/components/context/userContext'
import { useContext, useState } from 'react'


const YourDataView = () => {
  const { user } = useContext(UserContext)
  const data = user.data

  const [values, setValues] = useState({
    firstname: data.firstname,
    lastname: data.lastname,
    rut: data.rut,
    gender: data.gender,
    comuna: data.comuna,
    region: data.region,
    phone: data.phone,
    birthday: data.birthday,
  })


  const handlerSubmit = (e) => {
    e.preventDefault()
    alert('Submit')
    console.log(values)
  }


  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Tus datos</h4>
      <form className={styles.inputsContainer} onSubmit={handlerSubmit}>
        <InputsContainerView values={values} setValues={setValues} email={data.email} />
        <CustomCalendarView values={values} setValues={setValues} />
        <SelectOptionsView values={values} setValues={setValues} />
        <div className={styles.buttonContainer}>
          <SaveButton />
        </div>
      </form>
    </div>
  )
}

export default YourDataView
