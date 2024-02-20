import { BottomWave, LoginForm, LoginImage, TopWave } from './components';
import styles from './styles/Login.module.css';

function login() {
  return (
    <main className={styles.container}>
      <LoginImage />
      <section className={styles.wrapper}>
        <TopWave />
        <h3 className={styles.title}>Iniciar Sesión</h3>
        <LoginForm />
        <BottomWave />
      </section>
    </main>
  );
}

export default login;
