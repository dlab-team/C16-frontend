"use client";
import React from "react";
import "./Style.css";
import "../../../../globals.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import regionesData   from "../CompleteProfile/regionesData.json"
import { useRouter } from 'next/navigation'
import { updateUser } from "@/services/api/api.user.service";
import { UserContext } from "@/components/context/userContext";
import { useContext } from "react";

const CompleteProfile = () => {

  // const newUser = {
  //   id: result.user.uid,
  //   firstname: result.user.firstname,
  //   lastname: result.user.lastname,
  //   phone: result.user.phone,
  //   rut: result.user.rut,
  //   region: result.user.region,
  //   gender: result.user.gender,
  //   comuna: result.user.comuna,
  //   caretaker: result.user.caretaker,
  //   birthday: result.user.birthday,
   
  // }





  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   modifyData(
  //     'https://c16-backend.onrender.com/api/users',
  //     'POST',
  //     newUser,
  //   ).then((res) => {
  //     if (res.completed) {
  //       router.replace('/')
  //     } else {
  //       router.replace('/auth/completarPerfil')
  //     }
  //   })
  //   try {
  //     const response = await fetch("http://c16-backend.onrender.com/api/users", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(
  //         { 
  //         id, 
  //         firstname, 
  //         lastname,
  //        phone ,
  //        rut,
       
  //       }), // Envía el correo electrónico y el ID generado
  //     });

  //     if (!response.ok) {
  //       throw new Error("Error al crear la cuenta");
  //     }

  //     // Aquí puedes manejar la respuesta si es necesario
  //   } catch (error) {
  //     console.error("Error al crear la cuenta:", error);
  //     // Manejar el error apropiadamente, ya sea mostrando un mensaje al usuario o realizando alguna otra acción
  //   }
  // };

  const {user, updateUserContext} = useContext(UserContext)
  const router = useRouter()

  const [firstname , setFirstname] = useState('')
  const [lastname, setLasname] =  useState('')
  const [phone, setPhone] = useState("");
  const [rut, setRut] = useState("");
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");
  const [comuna, setComuna] = useState("");
  const [caretaker, setCaretaker] = useState("");
  const [labelColor, setLabelColor] = useState("#E8E8E8");
  const [isChecked, setIsChecked] = useState(false);
const [birthday, setBirthday] = useState(new Date());

  const handleSubmit= async (event)=>{
    event.preventDefault()

    const newFields = {
      firstname,
      lastname,
      phone,
      rut,
      region,
      gender,
      comuna,
      birthday:"1994-05-10",
      completed:true,
      photo:"https://firebasestorage.googleapis.com/v0/b/dropbox-clone-736fa.appspot.com/o/users%2Fuser_2aNC9F2HWDn5x5KjMBi9Y9ywEQX%2Ffiles%2Fdefaultprofile.png?alt=media",
    }
    const response = await updateUser(user.data.id, newFields, user.token)

    if(response){
      updateUserContext(response, user.token)
      alert('usuario completado')
    }
    router.push('/')
  }

  const changeColor = (selectedgender) => {
    switch (selectedgender) {
      case "mujer":
        setLabelColor("#35607F");
        break;
      case "hombre":
        setLabelColor("#E8E8E8");
        break;
      case "Sin especificar":
        setLabelColor("#E8E8E8");
        break;
      default:
        setLabelColor("#E8E8E8");
        break;
    }
  };

  const handlegenderChange = (e) => {
    const selectedgender = e.target.value;
    setGender(selectedgender);
    changeColor(selectedgender);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Invertimos el valor actual del estado
  };

  
  return (
    <div>
      <div className="register__descktop">
        <button className="button__back"></button>
 
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
                  value={firstname }
                  onChange={(e) => setFirstname (e.target.value)}
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
                  type="text"
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
                  type="text"
                  placeholder="11.111.111-1"
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
                 onChange={(date) => setBirthday(date)}
                 showYearDropdown
                 dateFormatCalendar="MMMM"
                 yearDropdownItemphone={100}
                 scrollableYearDropdown
           maxDate={new Date()}
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
                      handlegenderChange(e); // Cambio aquí
                    }}
                    required
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
                      setGender(e.target.value);
                      handlegenderChange;
                    }}
                    required
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
                    required
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
              setRegion(e.target.value);
              setComuna('none'); // Reinicia la comuna cuando cambia la región
            }}
            required
          >
            <option value="none">Selecciona</option>
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
              setComuna(e.target.value);
            }}
            disabled={region === 'none'}
            required
          >
            <option value="none">Selecciona</option>
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
              <div className="register__input">
                {/*<label htmlFor="cuidador">A quien Cuida</label>

                 <div className="register__input__button">
                  <select
                    name="region"
                    id="region"
                    onChange={(e) => {
                      setCaretaker(e.target.value);
                    }}
                  >
                    <option value="none">selecciona</option>
                    <option value="Pariente mayor de edad">
                      Pariente mayor de edad
                    </option>
                    <option value=" Pariente con enfermedad">
                      Pariente con enfermedad
                    </option>
                    <option value="Amigo/Conocido mayor de edad">
                      Amigo/Conocido mayor de edad
                    </option>
                    <option value="Amigo/Conocido con enfermedad">
                      Amigo/Conocido con enfermedad
                    </option>
                  </select>
                </div> */}
              </div>

              <div className="register__remenber">
                <div className="register__remenber__input">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
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
        {/* {alert ? <Alert type={} message={} /> : null} para los mensajes de exito  */}
      </div>
    </div>
  );
};

export default CompleteProfile;
