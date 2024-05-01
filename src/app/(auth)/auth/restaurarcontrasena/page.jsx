import styles from './Restaurarcontrasena.module.css'
import BackButton from './components/BackButton/BackButton'
import SendForm from './components/SendForm/SendForm'

function RestaurarContraseña() {
    return (
        <main className={styles.main}>

            <div className={styles.box}>

                <BackButton />

                <div className={styles.textBox}>
                    <h1 className={styles.title}>Restablecer Contraseña</h1>
                    <span className={styles.info}>Ingresa el correo registrado para restablecer tu contraseña</span>
                </div>

                <SendForm />

            </div>

        </main>
    )
}

export default RestaurarContraseña
