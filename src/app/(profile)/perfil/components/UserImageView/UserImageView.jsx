import Image from 'next/image'
import styles from './styles/UserImageView.module.css'

const UserImageView = () => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        width={90}
        height={90}
        src="https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg"
        alt="mi imagen de perfil"
        className={styles.profileImage}
      />
    </div>
  )
}

export default UserImageView
