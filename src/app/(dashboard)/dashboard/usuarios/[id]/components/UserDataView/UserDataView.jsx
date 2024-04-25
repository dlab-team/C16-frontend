'use client'
import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { CustomCalendarView } from '@/app/(profile)/perfil/components/YourDataView/components'
import regionesData from '../../../../../../(auth)/auth/componets/CompleteProfile/regionesData.json'
import styles from './styles/UserDataView.module.css'

const UserDataView = ({ inputsDisabled }) => {
  const [regionSelected, setRegionSelected] = useState('')
  const [community, setCommunity] = useState('')

  return (
    <div className={styles.container}>
      <label
        htmlFor="name"
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
      >
        Nombre
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Angela"
          className={styles.input}
          disabled={inputsDisabled}
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
          className={styles.input}
          disabled={inputsDisabled}
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
          disabled={inputsDisabled}
        />
      </label>
      <label
        htmlFor="phone"
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
      >
        Número telefónico
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="+56 9 1234 5678"
          className={styles.input}
          disabled={inputsDisabled}
        />
      </label>
      <label
        htmlFor="rut"
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
        disabled={inputsDisabled}
      >
        Rut
        <input
          type="number"
          id="rut"
          name="rut"
          placeholder="12345678-9"
          className={`${styles.input} ${styles.inputDisabled}`}
          disabled={inputsDisabled}
        />
      </label>
      <CustomCalendarView inputsDisabled={inputsDisabled} />
      <label
        htmlFor="name"
        className={`${styles.label} ${inputsDisabled && styles.labelDisabled}`}
      >
        Género
        <div className={styles.buttonsContainer}>
          <button className={styles.genderButton} disabled={inputsDisabled}>
            Hombre
          </button>
          <button className={styles.genderButton} disabled={inputsDisabled}>
            Mujer
          </button>
          <button
            className={styles.genderButton}
            disabled={inputsDisabled}
            aria-disabled={inputsDisabled}
          >
            Sin Especificar
          </button>
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
            value={regionSelected}
            onChange={(e) => {
              setRegionSelected(e.target.value)
              setCommunity('none')
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
            value={community}
            onChange={(e) => {
              setCommunity(e.target.value)
            }}
            disabled={regionSelected === 'none' || inputsDisabled}
            className={styles.select}
          >
            <option value="none">Selecciona</option>
            {regionesData.regiones
              .find((r) => r?.region === regionSelected)
              ?.comunas?.map((comuna, index) => (
                <option key={index} value={comuna}>
                  {comuna}
                </option>
              ))}
          </select>
          <AiOutlineDown className={styles.icon} />
        </div>
      </label>
    </div>
  )
}

export default UserDataView
