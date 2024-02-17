import React from 'react'
import "./StylesLogin.css";
import imagenes from "../../../public/assets/img";
import Image from "next/image";

const LoginForm = () => {
  return (
    <div>
      <div className='ola'>
      <Image src={imagenes.backlogin} />
      </div>
   
    <button></button>
    <div className = "register">
       <h2>Registrate</h2>
       <div className="register__inputgroup">
          <div className="register__input">
             <p>Nombre</p>
             <input type="text" />
          </div>
          <div className="register__input">
             <p>Apellido</p>
             <input type="text" />
          </div>
          <div className="register__input">
             <p>Correo</p>
             <input type="text" />
          </div>
          <div className="register__input__pasword">
             <p>Contraseña</p>
             <input type="Pasword" />
             <img src="" alt="" />
          </div>
          <div className="register__input__pasword">
             <p>repetir contraseña</p>
             <input type="Pasword" />
             <img src="" alt="" />
          </div>
          <div className="register__remember" >
             <input type="checkbox" />
             <small>Recodar</small>
          </div>
          <div className="register__buttons">
             <button>Crear cuenta</button>
             <button> ingresar con Google
             <img src="" alt="" />
             </button>
          </div>
       </div>
       <footer>
          <div>
             <p>¿Ya tiene una cuenta?</p>
          </div>run
          <div>
             {/* <a href="">Inicia sesión</a> */}
          </div>
       </footer>
    </div>
 </div>
  )
}

export default LoginForm
