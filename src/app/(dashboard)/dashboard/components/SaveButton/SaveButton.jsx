import styles from './styles/SaveButton.module.css'

const SaveButton = ({ title = 'Guardar cambios' }) => {
  return <button className={styles.container}>{title}</button>
}

export default SaveButton
