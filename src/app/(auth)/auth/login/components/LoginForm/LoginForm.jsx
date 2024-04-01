'use client';
import { useState } from 'react';
import styles from '../../styles/LoginForm.module.css';
import { CheckIcon, EyeIcon, HiddenEyeIcon } from './icons';
import { Buttons } from './components';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/services/firebaseConfig'

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword(e) {
    e.preventDefault();

    setShowPassword(!showPassword);
  }


  // Sign In sin cuenta Google 

  const signIn = (e) => {

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const idToken = await userCredential.user.getIdToken();
        console.log(idToken);

      // if (idToken) {
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
              window.location.href = '../auth/completarPerfil'
            } else {
              // Indica inicio de sesión exitoso
              console.log('Inicio de sesión exitoso');
            }
          })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        // Manejo de diferentes errores
        switch (errorCode) {
          case 'auth/user-not-found':
            console.log('El correo o la contraseña son incorrectos.');
            break;
          case 'auth/wrong-password':
            console.log('El correo o la contraseña son incorrectos.');
            break;
          default:
            console.log('Ocurrió un error al iniciar sesión:', errorMessage);
        }
      });
    
  };

  // Sign In con cuenta Google 

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
              window.location.href = '../auth/completarPerfil'
            } else {
              // Indica inicio de sesión exitoso
              console.log('Inicio de sesión exitoso');
            }
          })
      }
    })
  };

  return (
    <form className={styles.inputsContainer} onSubmit={signIn}>
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
          />
          <button
            onClick={(e) => handleShowPassword(e)}
            className={styles.eyeButton}
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
      <Buttons />
    </form>
  );
}

export default LoginForm;
