'use client';
import { useState } from 'react';
import styles from '../../styles/LoginForm.module.css';
import { CheckIcon } from './icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Buttons } from './components';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/services/firebaseConfig'
import { router } from 'next/router';


function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState('');


  function handleShowPassword(e) {
    e.preventDefault();

    setShowPassword(!showPassword);
  }

  // SignIn sin Google 

  const signIn = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const idToken = await userCredential.user.getIdToken();
        console.log(idToken);

        if (idToken) {
          localStorage.setItem('token', idToken); // Almacenar el token en el local storage

          const user = fetch("https://c16-backend.onrender.com/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${idToken}`,
            }
          })
            .then(res => res.json())
            .then(data => {

              // Verifica la respuesta del servidor
              console.log(data);
              console.log(data.message);

              if (data.completed === false) {
                console.log("********", data.completed);
                router.push('../auth/completarPerfil');
              } else {
                // Indica inicio de sesión exitoso
                console.log('Inicio de sesión exitoso');
                router.push('/');
              }
            })
        }
      })

      .catch((error) => {
        const errorCode = error.code;

        // Manejo de diferentes errores
        switch (errorCode) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            setError('Dirección de email o contraseña no coinciden');
            setEmailError(true);
            setPasswordError(true);
            break;

          default:
            setError('Dirección de email o contraseña no coinciden');
            setEmailError(true);
            setPasswordError(true);
        }
      });
  };

  // SignIn con Google 

  const signInWithGoogle = () => {

    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then(async (result) => {
      console.log("Google *******" + auth.currentUser);
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const idToken = await auth.currentUser.getIdToken()
      console.log(idToken)

      if (idToken) {
        localStorage.setItem('token', idToken); // Almacenar el token en el local storage

        fetch("https://c16-backend.onrender.com/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${idToken}`,
          },
        })
          .then(res => res.json())
          .then(data => {

            // Verifica la respuesta del servidor
            console.log(data);
            console.log(data.message);

            if (data.completed === false) {
              console.log("********", data.completed);
              router.push('../auth/completarPerfil');
            } else {
              // Indica inicio de sesión exitoso
              console.log('Inicio de sesión exitoso');
              router.push('/');
            }
          })
      }
    })
  };

  const methods = { signIn, signInWithGoogle };

  return (

    <form className={styles.inputsContainer}>
      <p className={`${styles.p} ${error ? styles.errorText : ''}`}>
        {error || 'Podrás dejar tus comentarios y conectar de más cerca con otros cuidadores'}
      </p>

      <label htmlFor="email" className={`${styles.inputWrapper} ${error ? styles.errorLabel: ''}`}>
        Correo electrónico
        <div className={styles.wrapper}>
          <input
            id="email"
            name="email"
            type="email"
            className={`${styles.input} ${emailError ? styles.errorInput : ''}`}
            placeholder="correo@electronico.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </label>

      <label htmlFor="password" className={`${styles.inputWrapper} ${error ? styles.errorLabel: ''}`}>
        Contraseña
        <div className={styles.wrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            className={`${styles.input} ${passwordError ? styles.errorInput : ''}`}
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => handleShowPassword(e)}
            className={`${styles.eyeButton} ${error ? styles.errorEyeButton: ''}`}
          >
            {showPassword ? <AiOutlineEye className={`${styles.eyeButton} ${error ? styles.errorEyeButton: ''}`}/> : <AiOutlineEyeInvisible className={`${styles.eyeButton} ${error ? styles.errorEyeButton: ''}`}/>}
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
