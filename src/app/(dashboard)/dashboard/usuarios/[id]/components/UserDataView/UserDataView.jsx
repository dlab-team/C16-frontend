'use client'
import { useState, useEffect, useContext } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { CustomCalendarView } from '@/app/(profile)/perfil/components/YourDataView/components'
import regionesData from '../../../../../../(auth)/auth/componets/CompleteProfile/regionesData.json'
import styles from './styles/UserDataView.module.css'
import { UserContext } from '@/components/context/userContext'
import { updateUser } from '@/services/api/api.user.service.js'
import { errorMessage, successMessage } from '@/utils/notify'

const UserDataView = ({ inputsDisabled, userProfile }) => {
  const [region, setRegion] = useState('')
  const [comuna, setComuna] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState(new Date())
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [rut, setRut] = useState('')
  const { user } = useContext(UserContext)
  const idToken = user.token

  useEffect(() => {
    const stateSetters = {
      region: setRegion,
      comuna: setComuna,
      gender: setGender,
      birthday: (dateString) => setBirthday(new Date(dateString)),
      firstname: setFirstName,
      lastname: setLastName,
      email: setEmail,
      phone: setPhone,
      rut: setRut,
    }

    Object.entries(userProfile || {}).forEach(([key, value]) => {
      if (stateSetters[key]) {
        if (key === 'birthday') {
          stateSetters[key](value)
        } else {
          stateSetters[key](value || '')
        }
      }
    })
  }, [userProfile])

  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${year}-${month}-${day}`
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (gender === '') {
      errorMessage('Debes seleccionar un genero')
    } else if (region === 'none' || comuna === 'none') {
      errorMessage('Debes seleccionar una region y comuna')
    } else {
      const formattedBirthday = formatDateString(birthday.toISOString())
      const updatedData = {
        firstname: firstName,
        lastname: lastName,
        phone: phone,
        rut: rut,
        birthday: formattedBirthday,
        gender: gender,
        region: region,
        comuna: comuna,
        completed: true,
      }
      updateUser(userProfile?.id, updatedData, idToken)
        .then(() => {
          successMessage('Información actualizada')
        })
        .catch(() => {
          errorMessage('Hubo un error al actualizar la información')
        })
    }
  }

  const handleDateChange = (date) => {
    setBirthday(date)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label
        htmlFor="name"
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Angela"
          value={firstName}
          className={styles.input}
          disabled={inputsDisabled}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label
        htmlFor="lastName"
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
      >
        Apellido
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Galdames"
          value={lastName}
          className={styles.input}
          disabled={inputsDisabled}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label
        htmlFor="email"
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
      >
        Correo electrónico
        <input
          type="email"
          id="email"
          name="email"
          placeholder="angelagaldames@gmail.com"
          className={styles.input}
          disabled
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label
        htmlFor="phone"
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
      >
        Número telefónico
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="+56 9 1234 5678"
          className={styles.input}
          disabled={inputsDisabled}
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label
        htmlFor="rut"
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
        disabled={inputsDisabled}
      >
        Rut
        <input
          type="text"
          id="rut"
          name="rut"
          pattern="^\d{6,8}-[0-9kK]$"
          placeholder="12345678-9"
          className={`${styles.input}`}
          disabled={inputsDisabled}
          value={rut}
          required
          onChange={(e) => setRut(e.target.value)}
        />
      </label>
      <CustomCalendarView
        inputsDisabled={inputsDisabled}
        date={birthday}
        onDateChange={handleDateChange}
      />
      {/*Arreglar el estilo de estos botones*/}
      <label
        htmlFor="gender"
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
      >
        Género
        <div className={styles.buttonsContainer}>
          <div className="register__input__toogle">
            <div className="register__toogles__buttons">
              <button
                className="toogle"
                id="register_woman"
                onClick={(e) => {
                  e.preventDefault()
                  setGender('mujer')
                }}
                style={{
                  background: gender === 'mujer' ? '#35607F' : '#E8E8E8',
                }}
                disabled={inputsDisabled}
              >
                Mujer
              </button>
            </div>
            <div className="register__toogles__buttons">
              <button
                className="toogle"
                id="register_man"
                onClick={(e) => {
                  e.preventDefault()
                  setGender('hombre')
                }}
                style={{
                  background: gender === 'hombre' ? '#35607F' : '#E8E8E8',
                }}
                disabled={inputsDisabled}
              >
                Hombre
              </button>
            </div>
            <div className="register__toogles__buttons">
              <button
                className="toogle"
                id="register_sinespecificar"
                onClick={(e) => {
                  e.preventDefault()
                  setGender('Sin especificar')
                }}
                style={{
                  background:
                    gender === 'Sin especificar' ? '#35607F' : '#E8E8E8',
                }}
                disabled={inputsDisabled}
              >
                Sin especificar
              </button>
            </div>
          </div>
        </div>
      </label>
      <label
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
      >
        Región
        <div className={styles.selectContainer}>
          <select
            name="region"
            id="region"
            className={styles.select}
            value={region}
            onChange={(e) => {
              setRegion(e.target.value)
              setComuna('none')
            }}
            disabled={inputsDisabled}
          >
            <option value="none">Selecciona</option>
            {regionesData?.regiones.map((region, index) => (
              <option key={index} value={region?.region}>
                {region?.region}
              </option>
            ))}
          </select>
          <AiOutlineDown className={styles.icon} />
        </div>
      </label>
      <label
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
      >
        Comuna
        <div className={styles.selectContainer}>
          <select
            name="comuna"
            id="comuna"
            value={comuna}
            onChange={(e) => {
              setComuna(e.target.value)
            }}
            disabled={region === 'none' || inputsDisabled}
            className={styles.select}
            required
          >
            <option value="none">Selecciona</option>
            {regionesData.regiones
              .find((r) => r?.region === region)
              ?.comunas?.map((comuna, index) => (
                <option key={index} value={comuna}>
                  {comuna}
                </option>
              ))}
          </select>
          <AiOutlineDown className={styles.icon} />
        </div>
      </label>
      {!inputsDisabled && (
        <div className={styles.wrapper}>
          <div className={styles.saveButtonContainer}>
            <button className={styles.saveButton} type="submit">
              Guardar cambios
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

export default UserDataView
