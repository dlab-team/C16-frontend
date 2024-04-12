import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import regionesData from '../../../../../../(auth)/auth/componets/CompleteProfile/regionesData.json'
import styles from './styles/SelectOptionsView.module.css'
import labelStyles from '../InputsContainerView/styles/InputsContainerView.module.css'

const SelectOptionsView = () => {
  const [regionSelected, setRegionSelected] = useState('')
  const [community, setCommunity] = useState('')

  return (
    <>
      <label className={labelStyles.label}>
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
      <label className={labelStyles.label}>
        Comuna
        <div className={styles.selectContainer}>
          <select
            name="comuna"
            id="comuna"
            value={community}
            onChange={(e) => {
              setCommunity(e.target.value)
            }}
            disabled={regionSelected === 'none'}
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
      <label className={labelStyles.label}>
        A quien cuida
        <div className={styles.selectContainer}>
          <select name="careFor" id="careFor" className={styles.select}>
            <option value="none">selecciona</option>
            <option value="Pariente mayor de edad">
              Pariente mayor de edad
            </option>
            <option value="Pariente con enfermedad">
              Pariente con enfermedad
            </option>
            <option value="Amigo/Conocido mayor de edad">
              Amigo/Conocido mayor de edad
            </option>
            <option value="Amigo/Conocido con enfermedad">
              Amigo/Conocido con enfermedad
            </option>
          </select>
          <AiOutlineDown className={styles.icon} />
        </div>
      </label>
    </>
  )
}

export default SelectOptionsView
