'use client'

import Image from 'next/image'

import styles from './styles/UserImageView.module.css'
import { UserContext } from '@/components/context/userContext'
import { useContext, useState } from 'react'
import SetImageModal from './components/SetImageModal'
import { successMessage, errorMessage } from '@/utils/notify'
import { updateUserPhoto } from '@/services/api'


const UserImageView = () => {
  const {user, refreshUser}= useContext(UserContext)
  const [openModal, setOpenModal] = useState(false)


  const handleClose=()=>{
    setOpenModal(false)
  }
  const editImage= async (data)=>{
    const formData = new FormData()
    formData.append('image', data)
    await updateUserPhoto(user.data?.id, formData, user.token)
      .then((response) => {
        successMessage('Imagen actualizada')
        refreshUser()
      })
      .catch((error) => {
        errorMessage('Error al actualizar imagen')
      })
    setOpenModal(false)
  }

  return (
    <>
      <div className={styles.imageWrapper}>
        <Image
          width={90}
          height={90}
          src={user.data.photo}
          alt="imagen de perfil"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.btnModal} onClick={()=>setOpenModal(true)}>Editar imagen</button>
      </div>
      <SetImageModal isOpen={openModal} onClose={handleClose} onConfirm={editImage}/>
    </>
  )
}

export default UserImageView
