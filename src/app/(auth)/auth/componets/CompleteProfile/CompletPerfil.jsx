"use client";

import "./Style.css";
import "../../../../globals.css";
import { useState } from "react";
import DatePicker, { setDefaultLocale, registerLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';

import "react-datepicker/dist/react-datepicker.css";
import regionesData from "../CompleteProfile/regionesData.json"
import { useRouter } from 'next/navigation'
import { updateUser } from "@/services/api/api.user.service";
import { UserContext } from "@/components/context/userContext";
import { useContext } from "react";

const minDate=()=>{
  const today = new Date()
  const date = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate() 
  )
  return date
}
const maxDate=()=>{
  const today = new Date()
    const date = new Date(
        today.getFullYear() - 90,
        today.getMonth(),
        today.getDate()
    )
    return date
}

const CompleteProfile = () => {

  const { user, updateUserContext } = useContext(UserContext)
  const router = useRouter()

  const [firstname, setFirstname] = useState("")
  const [lastname, setLasname] = useState("")
  const [phone, setPhone] = useState("")
  const [rut, setRut] = useState("")
  const [gender, setGender] = useState("Sin especificar")
  const [region, setRegion] = useState(false)
  const [comuna, setComuna] = useState(false)
  const [labelColor, setLabelColor] = useState("#E8E8E8")
  const [isChecked, setIsChecked] = useState(false)
  const [birthday, setBirthday] = useState(minDate())

  registerLocale('es', es)
  setDefaultLocale('es')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newFields = {
      firstname,
      lastname,
      phone,
      rut,
      region,
      birthday,
      comuna,
      gender,
      completed: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/dropbox-clone-736fa.appspot.com/o/users%2Fuser_2aNC9F2HWDn5x5KjMBi9Y9ywEQX%2Ffiles%2Fdefaultprofile.png?alt=media",
    }
    const response = await updateUser(user.data.id, newFields, user.token)

    if (response) {
      updateUserContext(response, user.token)
      alert('usuario completado')
    }
    router.push('/')
  }


  const handleDate = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const formattedMonth = month < 10 ? `0${month}` : month
    const formattedDay = day < 10 ? `0${day}` : day

    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`
    setBirthday(formattedDate)
  }

  const changeColor = (selectedgender) => {
    switch (selectedgender) {
      case "mujer":
        setLabelColor("#35607F")
        break
      case "hombre":
        setLabelColor("#E8E8E8")
        break;
      case "Sin especificar":
        setLabelColor("#E8E8E8")
        break;
      default:
        setLabelColor("#E8E8E8")
        break;
    }
  };

  const handlegenderChange = (e) => {
    const selectedgender = e.target.value
    setGender(selectedgender)
    changeColor(selectedgender)
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="register__descktop">
      <form onSubmit={handleSubmit}>
        <div className="register">
          <h2>Completa tu Perfil</h2>

          <div className="register__inputgroup">

            <div className="register__input">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                placeholder="Pedro"
                id="name"
                autoFocus
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>

            <div className="register__input">
              <label htmlFor="">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                id="name"
                autoFocus
                value={lastname}
                onChange={(e) => setLasname(e.target.value)}
                required
              />
            </div>
            <div className="register__input">
              <label htmlFor="numero de telefono">Numero de telefono</label>
              <div className="register__phone">
                <div className="register__phone__phone" ><p>+56</p></div>
                <input
                  pattern="^\d{9}$"
                  title="Introduzca un número de teléfono de 9 dígitos. Solo números permitidos."
                  placeholder="9 12345678"
                  id="name"
                  autoFocus
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="register__input">
              <label htmlFor="">RUT</label>
              <input
                pattern="^\d{6,8}-[0-9kK]$" 
                title="Ingrese un RUT válido. Ejemplo: 12345678-K"
                placeholder="11111111-1"
                id="name"
                autoFocus
                value={rut}
                onChange={(e) => setRut(e.target.value)}
                required
              />
            </div>
            <div className="register__input">
              <label htmlFor=""> Fecha de nacimiento</label>

              <div className="register__input__button__img">

                <DatePicker
                  selected={birthday}
                  onChange={(date) => handleDate(date)}
                  showYearDropdown
                  locale="es"
                  dateFormatCalendar="MMMM"
                  yearDropdownItemphone={100}
                  scrollableYearDropdown
                  minDate={maxDate()}
                  maxDate={minDate()}
                  showIcon
                  required
                />


              </div>
            </div>

            <div className="register__input__toogle">
              <div className="register__toogles__buttons">
                <input
                  name="gender"
                  className="toogle"
                  type="radio"
                  placeholder="mujer"
                  id="register_woman"
                  value="mujer"
                  onChange={(e) => {
                    setGender(e.target.value);
                    handlegenderChange(e);
                  }}
                />

                <label
                  className="switch"
                  htmlFor="register_woman"
                  style={{
                    background: gender === "mujer" ? "#35607F" : "#E8E8E8",
                  }}
                >
                  <span className="slider round"> Mujer</span>
                </label>
              </div>
              <div className="register__toogles__buttons">
                <input
                  name="gender"
                  className="toogle"
                  type="radio"
                  id="register_man"
                  value="hombre"
                  onChange={(e) => {
                    setGender(e.target.value)
                    handlegenderChange
                  }}
                />
                <label
                  className="switch"
                  htmlFor="register_man"
                  style={{
                    background: gender === "hombre" ? "#35607F" : "#E8E8E8",
                  }}
                >
                  <span className="slider round"> Hombre</span>
                </label>
              </div>
              <div className="register__toogles__buttons">
                <input
                  name="gender"
                  className="toogle"
                  type="radio"
                  placeholder="mujer"
                  id="register_sinespecificar"
                  value="Sin especificar"
                  onChange={(e) => {
                    setGender(e.target.value);
                    handlegenderChange;
                  }}
                />
                <label
                  className="switch"
                  htmlFor="register_sinespecificar"
                  style={{
                    background:
                      gender === "Sin especificar" ? "#35607F" : "#E8E8E8",
                  }}
                >
                  <span className="slider round">Sin especificar</span>
                </label>
              </div>
            </div>

            <div className="register__input">
              <label htmlFor="region">Regíon</label>

              <div className="register__input__button">
                <select
                  name="region"
                  id="region"
                  value={region}
                  onChange={(e) => {
                    setRegion(e.target.value)
                    setComuna('')
                  }}
                  title="Selecciona una región de la lista"
                  required
                >
                  <option value="">Selecciona</option>
                  {regionesData.regiones.map((region, index) => (
                    <option key={index} value={region.region}>
                      {region.region}
                    </option>
                  ))}
                </select>
                <div className="register__input__button__img"></div>
              </div>
            </div>
            <div className="register__input">
              <label htmlFor="Comuna">Comuna</label>

              <div className="register__input__button">
                <select
                  name="comuna"
                  id="comuna"
                  value={comuna}
                  onChange={(e) => {
                    setComuna(e.target.value)
                  }}
                  disabled={region === 'none'}
                  title="Selecciona una comuna de la lista"
                  required
                >
                  <option value="">Selecciona</option>
                  {regionesData.regiones
                    .find((r) => r.region === region)?.comunas.map((comuna, index) => (
                      <option key={index} value={comuna}>
                        {comuna}
                      </option>
                    ))}
                </select>

                <div className="register__input__button__img"></div>
              </div>
            </div>

            <div className="register__remenber">
              <div className="register__remenber__input">
                <input
                  type="checkbox"
                  title="Aprueba el consentimiento de manejo de los datos"
                  className="custom-checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  required
                />
              </div>

              <span>
                Acepto la política de Tratamiento de datos personales
              </span>
            </div>

            <div className="register__refer">
              <button className="register__buttons__pink" type="submit" >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CompleteProfile
