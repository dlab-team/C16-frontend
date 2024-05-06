import styles from './styles/SaveButton.module.css'

const SaveButton = ({ title = 'Guardar cambios', handlePress, isLoading }) => {
  return (
    <button
      className={styles.container}
      onClick={handlePress}
      disabled={isLoading}
    >
      {isLoading ? 'Cargando...' : title}
    </button>
  )
}

export default SaveButton
