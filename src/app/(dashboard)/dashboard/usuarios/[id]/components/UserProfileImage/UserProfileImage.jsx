'use client'
import Image from 'next/image'
import { AiOutlineEdit, AiOutlineDelete, AiOutlineLock } from 'react-icons/ai'
import styles from './styles/UserProfileImage.module.css'
import { UserContext } from '@/components/context/userContext'
import { useContext, useState, useRef } from 'react'
import { updateUserPhoto } from '@/services/api/api.user.service.js'
import { errorMessage, successMessage } from '@/utils/notify'

const UserProfileImage = ({
  inputsDisabled,
  setInputsDisabled,
  dialogIsOpen,
  setDialogIsOpen,
  showAlertMessage,
  setShowAlertMessage,
  userProfile,
}) => {
  const { user } = useContext(UserContext)
  const idToken = user.token
  const [selectedFile, setSelectedFile] = useState(null)
  const [updatedPhoto, setUpdatedPhoto] = useState(userProfile?.photo)
  const fileInputRef = useRef(null)

  const handleUpload = async (e) => {
    const formData = new FormData()
    formData.append('image', selectedFile)
    await updateUserPhoto(userProfile.id, formData, idToken)
      .then((response) => {
        successMessage('Imagen actualizada')
        setUpdatedPhoto(response.user.photo)
      })
      .catch((error) => {
        console.log(error)
        errorMessage('Error al actualizar imagen')
      })
  }

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

        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          ref={fileInputRef}
          accept="image/*"
          className={styles.inputFile}
        />

        <button onClick={handleUpload} className={styles.editPicButton}>
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
