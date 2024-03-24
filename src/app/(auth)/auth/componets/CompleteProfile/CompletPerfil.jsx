"use client";
import React from "react";
import "./Style.css";
import "../../../../globals.css";
import { useState } from "react";
import { AiFillCalendar } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CompleteProfile = () => {
  const [number, setNumber] = useState("");
  const [rut, setRut] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [region, setRegion] = useState("");
  const [sexo, setSexo] = useState("");
  const [comuna, setComuna] = useState("");
  const [caretaker, setCaretaker] = useState("");
  const [labelColor, setLabelColor] = useState("#E8E8E8");
  const [isChecked, setIsChecked] = useState(false);



  const toggleCalendar = () => {
    setShowCalendar((prevState) => !prevState);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date); // Formatear la fecha
    document.getElementById("calendario").value = formattedDate; // Actualizar el valor del input tipo texto
  };

  // Función para formatear la fecha a DD/MM/YYYY
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses van de 0 a 11
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const changeColor = (selectedSexo) => {
    switch (selectedSexo) {
      case "mujer":
        setLabelColor("#06786D");
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

  const handleSexoChange = (e) => {
    const selectedSexo = e.target.value;
    setSexo(selectedSexo);
    changeColor(selectedSexo);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Invertimos el valor actual del estado
  };

  return (
    <div>
      <div className="register__descktop">
        <button className="button__back"></button>
        <form>
          <div className="register">
            <h2>Completa tu Perfil</h2>
            <div className="register__inputgroup">
              <div className="register__input">
                <label htmlFor="">Numero de telefono</label>
                <input
                  type="text"
                  placeholder="+569"
                  id="name"
                  autoFocus
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
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
                />
              </div>
              <div className="register__input">
                <label htmlFor=""> Fecha de nacimiento</label>

                <div className="register__input__button__img">
                 
  
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    id="calendario"
                    value={selectedDate.toLocaleDateString()} // Debes incluir el valor aquí
                    onChange={(e) => handleDateChange(e.target.value)} // Pasar la función handleDateChange
                  />
                <div className="register__input__button__calendar">
                    <input
                      type="checkbox"
                      id="toggleCalendar"
                      onChange={toggleCalendar}
                      className="toggle__calendar"
                    />

                    <div className="register__calendar" id="calendarContainer">
                      <div className="father__register__calendar">
                      {showCalendar && (
                        <div className="register__calendar">
                          <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            maxDate={new Date()} 
                          />
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="register__input__toogle">
                <div className="register__toogles__buttons">
                  <input
                    name="sexo"
                    className="toogle"
                    type="radio"
                    placeholder="mujer"
                    id="register_woman"
                    value="mujer"
                    onChange={(e) => {
                      setSexo(e.target.value);
                      handleSexoChange(e); // Cambio aquí
                    }}
                  />

                  <label
                    className="switch"
                    htmlFor="register_woman"
                    style={{
                      background: sexo === "mujer" ? "#06786D" : "#E8E8E8",
                    }}
                  >
                    <span className="slider round"> Mujer</span>
                  </label>
                </div>
                <div className="register__toogles__buttons">
                  <input
                    name="sexo"
                    className="toogle"
                    type="radio"
                    id="register_man"
                    value="hombre"
                    onChange={(e) => {
                      setSexo(e.target.value);
                      handleSexoChange;
                    }}
                  />
                  <label
                    className="switch"
                    htmlFor="register_man"
                    style={{
                      background: sexo === "hombre" ? "#06786D" : "#E8E8E8",
                    }}
                  >
                    <span className="slider round"> Hombre</span>
                  </label>
                </div>
                <div className="register__toogles__buttons">
                  <input
                    name="sexo"
                    className="toogle"
                    type="radio"
                    placeholder="mujer"
                    id="register_sinespecificar"
                    value="Sin especificar"
                    onChange={(e) => {
                      setSexo(e.target.value);
                      handleSexoChange;
                    }}
                  />
                  <label
                    className="switch"
                    htmlFor="register_sinespecificar"
                    style={{
                      background:
                        sexo === "Sin especificar" ? "#06786D" : "#E8E8E8",
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
                    onChange={(e) => {
                      setRegion(e.target.value);
                    }}
                  >
                    <option value="none">selecciona</option>
                    <option value="value1">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
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
                    onChange={(e) => {
                      setComuna(e.target.value);
                    }}
                  >
                    <option value="none">selecciona</option>
                    <option value="value1">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                  </select>

                  <div className="register__input__button__img"></div>
                </div>
              </div>
              <div className="register__input">
                <label htmlFor="cuidador">A quien Cuida</label>

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
                </div>
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
                <button className="register__buttons__pink" type="submit">
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
