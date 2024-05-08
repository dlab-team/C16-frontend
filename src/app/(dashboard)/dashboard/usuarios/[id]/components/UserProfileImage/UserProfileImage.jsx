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
  userProfile,
  updatedPhoto,
  setSelectedFile,
  fileInputRef,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          width={90}
          height={90}
          src={updatedPhoto || userProfile?.photo}
          alt="mi imagen de perfil"
          className={styles.profileImage}
        />
        <div className={styles.editPicButton}>
          <div className={styles.inputWrapper}>
            <AiOutlineEdit size={20} className={styles.icon} />
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              ref={fileInputRef}
              accept="image/*"
              className={styles.inputFile}
            />
          </div>
        </div>
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
