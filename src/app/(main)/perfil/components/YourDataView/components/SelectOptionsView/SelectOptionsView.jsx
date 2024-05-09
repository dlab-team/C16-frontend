import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import regionesData from '../../../../../../(auth)/auth/componets/CompleteProfile/regionesData.json'
import styles from './styles/SelectOptionsView.module.css'
import labelStyles from '../InputsContainerView/styles/InputsContainerView.module.css'

const SelectOptionsView = ({ values, setValues }) => {
  const [regionSelected, setRegionSelected] = useState(values.region)
  const [community, setCommunity] = useState(values.comuna)
  const [genero, setGenero] = useState(values.gender)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Actualiza solo el campo modificado en el objeto `values`
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const regionHandler = (e) => {
    handleInputChange(e)

    setValues((prevValues) => ({
      ...prevValues,
      [comuna]: '',
    }));
  }

  return (
    <>
      <label className={labelStyles.label}>
        Género
        <div className={styles.selectContainer}>
          <select
            name="gender"
            id="gender"
            value={values.gender}
            /* onChange={(e) => setGenero(e.target.value)} */
            onChange={handleInputChange}
            className={styles.select}
          >
            <option value="sin especificar">Sin especificar</option>
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
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
            value={values.comuna}
            onChange={handleInputChange}
            disabled={regionSelected === ''}
            className={regionSelected === '' ? `${styles.select} ${styles.inputDisabled}` : styles.select}
            required
          >
            <option value="">Selecciona</option>
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
        Región
        <div className={styles.selectContainer}>
          <select
            name="region"
            id="region"
            className={styles.select}
            value={values.region}
            onChange={(e) => {
              regionHandler(e)
            }}
            required
          >
            <option value="">Selecciona</option>
            {regionesData?.regiones.map((region, index) => (
              <option key={index} value={region?.region}>
                {region?.region}
              </option>
            ))}
          </select>
          <AiOutlineDown className={styles.icon} />
        </div>
      </label>
    </>
  )
}

export default SelectOptionsView
