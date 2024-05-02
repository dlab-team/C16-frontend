import styles from './styles/UsView.module.css'

const UsView = () => {
  return (
    <section className={styles.container}>
      <label className={styles.label}>
        <h2 className={styles.heading}>Quiénes Somos</h2>
        <hr className={styles.hr} />
      </label>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
        elit ac fringilla sollicitudin, justo risus mattis nisi, eu convallis
        nulla velit non urna. Curabitur vitae ante quam. Vivamus nec augue et
        leo efficitur commodo.
      </p>
      <label className={styles.label}>
        <h2 className={styles.heading}>Misión y Visión</h2>
        <hr className={styles.hr} />
      </label>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
        elit ac fringilla sollicitudin, justo risus mattis nisi, eu convallis
        nulla velit non urna. Curabitur vitae ante quam. Vivamus nec augue et
        leo efficitur commodo.
      </p>
      <label className={styles.label}>
        <h2 className={styles.heading}>Nuestra Historia</h2>
        <hr className={styles.hr} />
      </label>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
        elit ac fringilla sollicitudin, justo risus mattis nisi, eu convallis
        nulla velit non urna. Curabitur vitae ante quam. Vivamus nec augue et
        leo efficitur commodo.
      </p>
    </section>
  )
}

export default UsView
