'use client';
import { useState } from 'react';
import styles from '../../styles/LoginForm.module.css';
import { CheckIcon, EyeIcon, HiddenEyeIcon } from './icons';
import { Buttons } from './components';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from '@/services/firebaseConfig'


function LoginForm() {

  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword(e) {
    e.preventDefault();

    setShowPassword(!showPassword);
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //ACCESSTOKEN
        const token = userCredential.user.accessToken;
        console.log("ACCESSTOKEN:", token);
        //UID
        const id = userCredential.user.uid;
        console.log("UID:", id);
        //EMAIL
        const mail = userCredential.user.email;
        console.log("EMAIL:", mail);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      setEmailGoogle(result.user.email);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      //ACCESSTOKEN
      const token = credential.accessToken;
      console.log("ACCESSTOKEN:", token);
      //UID
      const id = result.user.uid;
      console.log("UID:", id);
      //EMAIL
      const mail = result.user.email;
      console.log("EMAIL:", mail);

      //Lo que se manda al endpoint
      //Devolveria nuevo user solo si no existe en la base de datos
      //Pero si existe, devuelve el user existente
      const newUser = {
        userId: result.user.uid,
        email: result.user.email,
        userCompleted: false,
      };
      console.log(newUser);
    });
  };

  return (
    <form className={styles.inputsContainer}>
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
