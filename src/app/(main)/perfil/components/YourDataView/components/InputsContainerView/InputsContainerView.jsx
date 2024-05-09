import styles from './styles/InputsContainerView.module.css'

const InputsContainerView = ({ values, setValues, email }) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Actualiza solo el campo modificado en el objeto `values`
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <label htmlFor="name" className={styles.label}>
        Nombre
        <input
          type="text"
          id="name"
          name="firstname"
          placeholder="Digita tu nombre"
          className={styles.input}
          value={values.firstname}
          onChange={handleInputChange}
          required
        />
      </label>
      <label htmlFor="lastName" className={styles.label}>
        Apellido
        <input
          type="text"
          id="lastName"
          name="lastname"
          placeholder='Digita tu apellido'
          className={styles.input}
          value={values.lastname}
          onChange={handleInputChange}
          required
        />
      </label>
      <label htmlFor="email" className={`${styles.label} ${styles.inputDisabled}`} aria-disabled>
        Correo electrónico
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder={`${email}`}
          aria-disabled
          disabled
        />
      </label>
      <label htmlFor="phone" className={styles.label}>
        Número teléfonico
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Digita tu numero de telefono"
          value={values.phone}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
      </label>
      <label
        htmlFor="rut"
        className={styles.label}
      >
        Rut
        <input
          id="rut"
          pattern="^\d{6,8}-[0-9kK]$"
          title="Ingrese un RUT válido. Ejemplo: 12345678-K"
          name="rut"
          type='text'
          placeholder="12345678-K"
          value={values.rut}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
      </label>
    </>
  )
}

export default InputsContainerView
