'use client'
import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import regionesData from '../../../../../../(auth)/auth/componets/CompleteProfile/regionesData.json'
import styles from './styles/FiltersView.module.css'

const FiltersView = () => {
  const [region, setRegion] = useState('')
  const [comuna, setComuna] = useState('')

  return (
    <div className={styles.container}>
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
      <div className={styles.selectContainer}>
        <select
          name="comuna"
          id="comuna"
          value={comuna}
          onChange={(e) => {
            setComuna(e.target.value)
          }}
          disabled={region === 'none'}
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
    </div>
  )
}

export default FiltersView
