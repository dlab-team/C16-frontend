'use client'

import './Style.css'
import { AiOutlineLeft } from 'react-icons/ai'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import '../../../../globals.css'
import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

import { authGoogle, logOut, registerEmailAndPassword } from '@/services/user.fire.service'
import { createUser } from '@/services/api/api.user.service'
import { UserContext } from '@/components/context/userContext'
import Link from 'next/link'

const RegistroComponent = () => {
  const router = useRouter()
  const { updateUserContext, deleteUser } = useContext(UserContext)
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailGoogle, setEmailGoogle] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [validLength, setValidLength] = useState(false)
  const [hasSpecialChar, setHasSpecialChar] = useState(false)
  const [hasNumber, setHasNumber] = useState(false)
  
  
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    
    setPassword(newPassword)
    
    // Validar longitud
    setValidLength(newPassword.length >= 8)
    
    // Validar caracter especial
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    setHasSpecialChar(specialCharRegex.test(newPassword))
    
    // Validar número
    const numberRegex = /\d/
    setHasNumber(numberRegex.test(newPassword))
  }
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  
  const handleLogout = ()=>{
    deleteUser()
    logOut()
  }
  
  const isEmailValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }


  const signUp = async (e) => {
    e.preventDefault()
    const idToken = await registerEmailAndPassword(email, password)
    const user = await createUser(idToken) 
    updateUserContext(user, idToken)
    alert('Usuario completado')
    router.push("/auth/completarPerfil")
    
  }

  
  const handleAuthGoogle = async ()=>{
    try {
      const idToken = await authGoogle()
      if (idToken) {
        const user = await createUser(idToken) 
        updateUserContext(user, idToken)
        if(user.completed){
          router.push("/")
        }else{
          router.push("/auth/completarPerfil")
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isEmailValid(email)) {
      console.log('Correo electrónico no válido')
      return
    }
    
    if (!password) {
      console.log('La contraseña no puede estar vacía')
      return
    }
    
    if (!validLength || !hasSpecialChar || !hasNumber) {
      if (!validLength) {
        console.log('Faltan letras')
      }
      if (!hasSpecialChar) {
        console.log('Faltan caracteres especiales')
      }
      if (!hasNumber) {
        console.log('Faltan números')
      }
      return
    }
    router.push('/auth/completarPerfil')
    // Aquí se envía el formulario
    signUp(e)
  }
  return (
    <div>
      <div className="register__descktop">
      <Link href='/'>
        <button className="button__back">
          <AiOutlineLeft />
        </button>
      </Link>

        <div className="register">
          <h2>Registrate</h2>

          <form className="register__inputgroup" onSubmit={handleSubmit}>
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder="*******"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div
                  className="register__input__password__img"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <LuEye /> : <LuEyeOff />}
                </div>
              </div>
              <div>
                <div className="register__password_property">
                  <div className="register__password__text">
                    <input type="radio" checked={validLength} readOnly />
                    <div className="password__text">
                      <p>Debe contener mínimo 8 dígitos</p>
                    </div>
                  </div>
                  <div className="register__password__text">
                    <input type="radio" checked={hasSpecialChar} readOnly />
                    <div className="password__text">
                      <p>Un caracter especial</p>
                    </div>
                  </div>
                  <div className="register__password__text">
                    <input type="radio" checked={hasNumber} readOnly />
                    <div className="password__text">
                      <p>Un número</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="register__button">
              <button className="register__buttons__pink" type="submit">
                Crear cuenta
              </button>
              <button
                className="register__buttons__outline"
                onClick={() => handleAuthGoogle()}
                type='button'
              >
                Ingresar con Google {emailGoogle}
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
              <a href="./login">Inicia sesión</a>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleLogout} type='button'>
        logout
      </button>
    </div>
  )
}

export default RegistroComponent
