'use client';

import { useState, useContext } from 'react';
import styles from '../../styles/LoginForm.module.css';
import { CheckIcon, EyeIcon, HiddenEyeIcon } from './icons';
import { Buttons } from './components';

import { authGoogle, loginEmailAndPassword } from '@/services/user.fire.service';
import { createUser, getUser } from '@/services/api/api.user.service';
import { UserContext } from '@/components/context/userContext';
import { useRouter } from 'next/navigation'

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {updateUserContext} = useContext(UserContext)
  const router = useRouter()

  function handleShowPassword(e) {
    e.preventDefault();

    setShowPassword(!showPassword);
  }

  // SignIn con Google 
  const handleAuthGoogle = async ()=>{
    try {
      const idToken = await authGoogle()
      if (idToken) {
        const user = await createUser(idToken) 
        updateUserContext(user, idToken)
        if(user.completed){
          alert(`Bienvenido ${user.firstname}`)
          router.push("/")
        }else{
          router.push("/auth/completarPerfil")
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleLogin = async (e) =>{
    e.preventDefault()
    try {
      console.log(email, password)
      const {idToken, uid} = await loginEmailAndPassword(email, password)
      const user = await getUser(uid)
      updateUserContext(user, idToken)
      if(user.completed){
        alert(`Bienvenido ${user.firstname}`)
        router.push("/")
      }else{
        router.push("/auth/completarPerfil")
      }
    } catch (error) {
      console.error(error)
    }
  }


  const methods = {handleAuthGoogle};

  return (

    <form className={styles.inputsContainer} onSubmit={handleLogin}>
      <p className={styles.p}>
        Podrás dejar tus comentarios y conectar de más cerca con otros
        cuidadores
      </p>
      <label htmlFor="email" className={styles.inputWrapper}>
        Correo electrónico
        <div className={styles.wrapper}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="correo@electronico.com"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </label>
      <label htmlFor="password" className={styles.inputWrapper}>
        Contraseña
        <div className={styles.wrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="********"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            onClick={(e) => handleShowPassword(e)}
            className={styles.eyeButton}
            type='button'
          >
            {showPassword ? <EyeIcon /> : <HiddenEyeIcon />}
          </button>
        </div>
      </label>
      <label htmlFor="remember" className={styles.rememberInput}>
        <div className={styles.checkboxContainer}>
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className={styles.checkboxRound}
          />
          <span className={styles.span}>
            <CheckIcon />
          </span>
        </div>
        Recordar
      </label>
      <Buttons methods = {methods}/>
    </form>
  );
}

export default LoginForm;
