"use client";
import React from "react";
import "./Style.css";
import "../../../../globals.css";
import { useState } from "react";
import { AiFillCalendar } from "react-icons/ai";

const RegistroComponenteII = () => {
  const [number, setNumber] = useState("");
  const [sexo, setSexo] = useState("");
  const [rut, setRut] = useState("");
  const [year, setYear] = useState("");
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");
  const [caretaker, setCaretaker] = useState("");
  const [labelColor, setLabelColor] = useState("#E8E8E8");
  const [term, setTerm] = useState(false);

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
  const handleterm = (e) => {
    setTerm(true);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setNumber('');
  //   setRut('');
  //   setYear('');
  //   setRegion('');
  //   setComuna('');
  //   setCaretaker('');
  //   setTerm ('')

  //   if (number === '' || rut === '' || year=== '' || region === '' || comuna === '' || caretaker === '' || term === '') {

  //       handleRegistro(2)
  //       setAlert(true);
  //       return;
  //   }

  //   handleRegistro(1)
  //   setAlert(true);
  // onSubmit={handleSubmit}
  // };

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
                <p>Fecha de nacimiento</p>
                <div className="register__input__button">
                  <input
                    type="texte"
                    placeholder="DD/MM/YYYY"
                    id="brithday"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <div className="register__input__button__img">
                    <AiFillCalendar />
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
                      handleSexoChange;
                    }}
                  />
                  <label
                    className="switch"
                    For="register_woman"
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
                    placeholder="mujer"
                    id="register_man"
                    value="hombre"
                    onChange={(e) => {
                      setSexo(e.target.value);
                      handleSexoChange;
                    }}
                  />
                  <label
                    className="switch"
                    for="register_man"
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
                    for="register_sinespecificar"
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
                <p>Regíon</p>
                <div className="register__input__button">
                  <select
                    name="region"
                    id="region"
                    onChange={(e) => {
                      setRegion(e.target.value);
                    }}
                  >
                    <option value="" selected>
                      selecciona
                    </option>
                    <option value="value1">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                  </select>

                  <div className="register__input__button__img"></div>
                </div>
              </div>
              <div className="register__input">
                <p>Comuna</p>
                <div className="register__input__button">
                  <select
                    name="comuna"
                    id="comuna"
                    onChange={(e) => {
                      setComuna(e.target.value);
                    }}
                  >
                    <option value="" selected>
                      selecciona
                    </option>
                    <option value="value1">Value 1</option>
                    <option value="value2" selected>
                      Value 2
                    </option>
                    <option value="value3">Value 3</option>
                  </select>

                  <div className="register__input__button__img"></div>
                </div>
              </div>
              <div className="register__input">
                <p>A quien Cuida</p>
                <div className="register__input__button">
                  <select
                    name="region"
                    id="region"
                    onChange={(e) => {
                      setCaretaker(e.target.value);
                    }}
                  >
                    <option value="none" selected>
                      selecciona
                    </option>
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
                <input
                  type="radio"
                  value={term}
                  onChange={(e) => {
                    handleterm();
                  }}
                />
                <span>
                  Acepto la política de Tratamiento de datos personales{" "}
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

export default RegistroComponenteII;
