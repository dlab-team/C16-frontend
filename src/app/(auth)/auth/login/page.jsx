import {LoginForm, LoginImage} from './components';
import styles from './styles/Login.module.css';

function login() {
  return (
    <main className={styles.container}>
      <LoginImage />
      <section className={styles.wrapper}>
        <h3 className={styles.title}>Iniciar Sesión</h3>
        <LoginForm />
      </section>
    </main>
  );
}

export default login;
