'use client';
import { useState } from 'react';
import styles from '../../styles/LoginForm.module.css';
import { CheckIcon, EyeIcon, HiddenEyeIcon } from './icons';
import { Buttons } from './components';

function LoginForm() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword(e) {
    e.preventDefault();

    setShowPassword(!showPassword);
  }

  return (
    <form className={styles.inputsContainer}>
      <label htmlFor="email" className={styles.inputWrapper}>
        Ingresa tu correo
        <div className={styles.wrapper}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="correo@electronico.com"
            className={styles.input}
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
