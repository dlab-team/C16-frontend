"use client";
import React from "react";
import "./Style.css";
import { AiOutlineLeft } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import "../../../../globals.css";
import { useState } from "react";



const RegistroComponent = (response, loading, isError, error) => {


// const [id, setId] = useState("")
  // const [alert, setAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [id, setId] = useState("");

  const isEmailValid = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(String(email).toLowerCase());
   };



   const generateRandomId = () => {
     // Genera un número aleatorio de 3 dígitos
     return Math.floor(100 + Math.random() * 900);
   };
 
   const handleSubmit = async (event) => {
     event.preventDefault();
     try {
       // Genera el ID basado en la fecha actual y un número aleatorio de 3 dígitos
       const currentDate = Date.now();
       const randomId = generateRandomId();
       const generatedId = currentDate + randomId;
 
       // Realiza la solicitud POST al servidor
       const response = await fetch("http://c16-backend.onrender.com/api/users", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ id: generatedId, email }), // Envía el correo electrónico y el ID generado
       });
 
       if (!response.ok) {
         throw new Error("Error al crear la cuenta");
       }
 
       // Aquí puedes manejar la respuesta si es necesario
     } catch (error) {
       console.error("Error al crear la cuenta:", error);
       // Manejar el error apropiadamente, ya sea mostrando un mensaje al usuario o realizando alguna otra acción
     }
   };



  
  return (
    <div>
      <div className="register__descktop">
        <button className="button__back">
          <AiOutlineLeft />
        </button>

        <div className="register">
          <h2>Registrate</h2>

          <form  className="register__inputgroup" onSubmit={handleSubmit}>
        
            <div className="register__input">

              <label htmlFor="Correo">Correo</label>

              <input
                type="text"
                placeholder="correo@electronico.com"
                id="correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="register__input">
              <label htmlFor="contraseña">Contraseña</label>

              <div className="register__input__password">
                <input
                  type="password"
                  placeholder="*******"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="register__input__password__img">
                  <LuEye />
                </div>
              </div>
            </div>

            <div className="register__button">
            <div className="register__button">
              <button className="register__buttons__pink" type="submit">Crear cuenta</button>
             
              {loading && <p>Cargando...</p>}
              
              {isError && <p>Error: {error}</p>}
            </div>
              <button className="register__buttons__outline" >
                Ingresar con Google
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9398 11.7148H25V11.6663H14.5V16.333H21.0935C20.1315 19.0496 17.5468 20.9997 14.5 20.9997C10.6343 20.9997 7.50004 17.8654 7.50004 13.9997C7.50004 10.1339 10.6343 6.99967 14.5 6.99967C16.2845 6.99967 17.9079 7.67284 19.144 8.77242L22.4439 5.47251C20.3602 3.53059 17.573 2.33301 14.5 2.33301C8.05712 2.33301 2.83337 7.55676 2.83337 13.9997C2.83337 20.4426 8.05712 25.6663 14.5 25.6663C20.943 25.6663 26.1667 20.4426 26.1667 13.9997C26.1667 13.2174 26.0862 12.4538 25.9398 11.7148Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M4.17847 8.56943L8.01155 11.3805C9.04872 8.81267 11.5606 6.99967 14.5 6.99967C16.2844 6.99967 17.9078 7.67284 19.1439 8.77242L22.4438 5.47251C20.3601 3.53059 17.573 2.33301 14.5 2.33301C10.0188 2.33301 6.13263 4.86292 4.17847 8.56943Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M14.5 25.6671C17.5135 25.6671 20.2517 24.5138 22.3219 22.6384L18.7111 19.5829C17.5004 20.5036 16.021 21.0016 14.5 21.0004C11.4655 21.0004 8.88894 19.0655 7.91827 16.3652L4.11377 19.2965C6.0446 23.0747 9.96577 25.6671 14.5 25.6671Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M25.9398 11.7154H25V11.667H14.5V16.3337H21.0934C20.6333 17.6266 19.8045 18.7563 18.7093 19.5834L18.7111 19.5822L22.3219 22.6377C22.0664 22.8699 26.1667 19.8337 26.1667 14.0003C26.1667 13.2181 26.0862 12.4545 25.9398 11.7154Z"
                    fill="#1976D2"
                  />
                </svg>
              </button>
            </div>
          </form>

          <div className="register__footer">
            <div className="register__background__footer"></div>
            <div className="register__footer__text">
              <p>¿Ya tiene una cuenta?</p>
            </div>
            <div className="register__refer">
              <a href="">Inicia sesión</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroComponent;
