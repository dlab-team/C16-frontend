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
import { updateUser } from '@/services/api'
import { successMessage, errorMessage } from '@/utils/notify'



const YourDataView = () => {
  const { user, refreshUser } = useContext(UserContext)
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
    completed: true,
  })


  const handlerSubmit = async(e) => {
    e.preventDefault()
    await updateUser(user.data.id, values, user.token)
    .then((res)=>{
      if(res.ok){
        successMessage('Usuario actualizado correctamente!')
        refreshUser()
      }
    }).catch(()=>errorMessage('No se pudo actualizar, verifique los datos enviados o intentelo más tarde.'))
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
