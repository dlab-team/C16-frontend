'use client'

import Image from 'next/image'
import { AiOutlineEdit, AiOutlineDelete, AiOutlineLock } from 'react-icons/ai'
import styles from './styles/UserProfileImage.module.css'
import { useContext, useState } from 'react'
import { UserContext } from '@/components/context/userContext'
import { errorMessage, successMessage } from '@/utils/notify'
import { updateUserPhoto } from '@/services/api'
import SetImageModal from '../ModalEdit/SetImageModal'
import { useRouter } from 'next/navigation'

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

  const { user, refreshUser } = useContext(UserContext)
  const [openModal, setOpenModal] = useState(false)
  const router = useRouter()


  const handleClose = () => {
    setOpenModal(false)
  }
  const handleOpen = () => {
    setOpenModal(true)
  }
  const editImage = async (data) => {
    const formData = new FormData()
    formData.append('image', data)
    await updateUserPhoto(userProfile?.id, formData, user.token)
      .then((response) => {
        successMessage('Imagen actualizada')
        router.refresh()
      })
      .catch((error) => {
        errorMessage('Error al actualizar imagen')
      })
    setOpenModal(false)
  }



  return (
    <>
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
              <button
                type="button"
                onClick={(e) => handleOpen()}
                className={styles.inputFile}
              ></button>

              {/* <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              ref={fileInputRef}
              accept="image/*"
              className={styles.inputFile}
            /> */}
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
      <SetImageModal onClose={handleClose} onConfirm={editImage} isOpen={openModal} />
    </>
  )
}

export default UserProfileImage
