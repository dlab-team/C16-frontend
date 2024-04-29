'use client';

import { useState, useContext } from 'react';
import styles from '../../styles/LoginForm.module.css';
import { CheckIcon } from './icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Buttons } from './components';

import { authGoogle, loginEmailAndPassword } from '@/services/user.fire.service';
import { createUser, getUser } from '@/services/api/api.user.service';
import { UserContext } from '@/components/context/userContext';
import { useRouter } from 'next/navigation'
import { errorMessage } from "@/utils/notify";

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState('');

  const { updateUserContext } = useContext(UserContext)
  const router = useRouter()

  function handleShowPassword(e) {
    e.preventDefault();

    setShowPassword(!showPassword);
  }

  // SignIn Con Google 

  const handleAuthGoogle = async () => {
    try {
      const idToken = await authGoogle()
      if (idToken) {
        const user = await createUser(idToken)
        updateUserContext(user, idToken)
        if (user.completed) {
          router.push("/")
        } else {
          router.push("/auth/completarPerfil")
        }
      }
    } catch (error) {
      console.error(error)
      errorMessage('El usuario no se pudo crear, inténtelo más tarde.')
    }
  }

  // SignIn Con Email 

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      console.log(email, password)
      const { idToken, uid } = await loginEmailAndPassword(email, password)
      const user = await getUser(uid)
      updateUserContext(user, idToken)
      if (user.completed) {
        router.push("/")
      } else {
        router.push("/auth/completarPerfil")
      }
    } catch (error) {
      console.error(error)

      // Manejo de diferentes errores
      setError('Dirección de email o contraseña no coinciden');
    }
  }

  const methods = { handleAuthGoogle };

  return (

    <form className={styles.inputsContainer} onSubmit={handleLogin}>
      <p className={`${styles.p} ${error ? styles.errorText : ''}`}>
        {error || 'Podrás dejar tus comentarios y conectar de más cerca con otros cuidadores'}
      </p>

      <label htmlFor="email" className={`${styles.inputWrapper} ${error ? styles.errorLabel : ''}`}>
        Correo electrónico
        <div className={styles.wrapper}>
          <input
            id="email"
            name="email"
            type="email"
            className={`${styles.input} ${error ? styles.errorInput : ''}`}
            placeholder="correo@electronico.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </label>

      <label htmlFor="password" className={`${styles.inputWrapper} ${error ? styles.errorLabel : ''}`}>
        Contraseña
        <div className={styles.wrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            className={`${styles.input} ${error ? styles.errorInput : ''}`}
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            onClick={(e) => handleShowPassword(e)}
            className={`${styles.eyeButton} ${error ? styles.errorEyeButton : ''}`}
            type='button'
          >
            {showPassword ? <AiOutlineEye className={`${styles.eyeButton} ${error ? styles.errorEyeButton : ''}`} /> : <AiOutlineEyeInvisible className={`${styles.eyeButton} ${error ? styles.errorEyeButton : ''}`} />}
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
      <Buttons methods={methods} />
    </form>
  );
}
export default LoginForm;
