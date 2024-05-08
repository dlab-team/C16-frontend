import styles from './styles/UsView.module.css'

const UsView = () => {
  return (
    <section className={styles.container}>
      <label className={styles.label}>
        <h2 className={styles.heading}>Quiénes Somos</h2>
        <hr className={styles.hr} />
      </label>
      <p className={styles.paragraph}>
      Somos una red respaldada por muchas organizaciones de la sociedad civil, tanto públicas como privadas, unidas para apoyar y resguardar el derecho de las personas cuidor@s a lo largo de todo Chile

<br />
      La Red Nacional de Cuidados, reúne a diversas organizaciones públicas y privadas de la sociedad civil a lo largo de todo Chile. Desde el inicio hemos participado de forma activa en las mesas técnicas del Ministerio de Trabajo y Previsión Social, Ministerio de la Mujer y Equidad de Género y OIT, además de un trabajo activo en la discusión parlamentaria que hoy se refleja en la promulgación de la “Ley de Conciliación de la vida personal, familiar y laboral” firmada por el Presidente de la República y autoridades del ramo el pasado 22 de diciembre de 2023 y cuya implementación será desde el 29 de enero de 2024. 
comentar todo lo demas 
      </p>
      {/* <label className={styles.label}>
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
      </p> */}
    </section>
  )
}

export default UsView
