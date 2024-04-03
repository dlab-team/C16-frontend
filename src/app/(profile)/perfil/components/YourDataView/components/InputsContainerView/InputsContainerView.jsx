import styles from './styles/InputsContainerView.module.css'

const InputsContainerView = () => {
  return (
    <>
      <label htmlFor="name" className={styles.label}>
        Nombre
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Angela"
          className={styles.input}
        />
      </label>
      <label htmlFor="lastName" className={styles.label}>
        Apellido
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Galdames"
          className={styles.input}
        />
      </label>
      <label htmlFor="email" className={styles.label}>
        Correo electrónico
        <input
          type="email"
          id="email"
          name="email"
          placeholder="angelagaldames@gmail.com"
          className={styles.input}
        />
      </label>
      <label htmlFor="phone" className={styles.label}>
        Número teléfonico
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="+56 9 1234 5678"
          className={styles.input}
        />
      </label>
      <label
        htmlFor="rut"
        className={`${styles.label} ${styles.inputDisabled}`}
        aria-disabled
      >
        Rut
        <input
          type="number"
          id="rut"
          name="rut"
          placeholder="12345678-9"
          className={`${styles.input} ${styles.inputDisabled}`}
          aria-disabled
          disabled
        />
      </label>
    </>
  )
}

export default InputsContainerView
