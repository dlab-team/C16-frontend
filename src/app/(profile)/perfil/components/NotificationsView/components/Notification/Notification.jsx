import Image from 'next/image'
import { FaCircle } from 'react-icons/fa'
import styles from './styles/Notification.module.css'

const Notification = ({ read, setRead }) => {
  return (
    <button
      className={`${read ? styles.pressed : styles.noPressed} ${styles.container}`}
      onClick={() => setRead(!read)}
    >
      <div className={styles.wrapper}>
        <Image
          width={45}
          height={45}
          src="https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg"
          alt="mi imagen de perfil"
          className={styles.profileImage}
        />
        <div className={styles.messageContainer}>
          <h6 className={styles.title}>Red nacional de cuidadores</h6>
          <p className={styles.content}>
            Te invitamos a la próxima reunión de cuidadores este 28 de febrero
            2024
          </p>
          <small className={styles.small}>Hace 2 horas</small>
        </div>
        {!read && <FaCircle className={styles.circle} />}
      </div>
    </button>
  )
}

export default Notification
