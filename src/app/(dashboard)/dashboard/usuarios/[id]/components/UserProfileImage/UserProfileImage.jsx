import Image from 'next/image'
import { AiOutlineEdit, AiOutlineDelete, AiOutlineLock } from 'react-icons/ai'
import styles from './styles/UserProfileImage.module.css'

const UserProfileImage = ({
  inputsDisabled,
  setInputsDisabled,
  dialogIsOpen,
  setDialogIsOpen,
  showAlertMessage,
  setShowAlertMessage,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          width={90}
          height={90}
          src="https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg"
          alt="mi imagen de perfil"
          className={styles.profileImage}
        />
        <button className={styles.editPicButton}>
          <AiOutlineEdit size={20} />
        </button>
      </div>
      <div className={styles.buttonsWrapper}>
        <button
          className={styles.button}
          onClick={() => setInputsDisabled(!inputsDisabled)}
        >
          <AiOutlineEdit size={20} />
        </button>
        <button
          className={styles.button}
          onClick={() => setDialogIsOpen(!dialogIsOpen)}
        >
          <AiOutlineLock size={20} />
        </button>
        <button
          className={`${styles.button} ${styles.deleteButton}`}
          onClick={() => setShowAlertMessage(!showAlertMessage)}
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </div>
  )
}

export default UserProfileImage
