'use client'
import { GoBackButton } from '../../components'
import { UserDataView, UserProfileImage } from './components'
import styles from './styles/DashboardUserById.module.css'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { getUser } from '@/services/api/api.user.service.js'
import UserModal from './components/Modal/UserModal'

const DashboardUserById = () => {
  const [inputsDisabled, setInputsDisabled] = useState(true)
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const [showAlertMessage, setShowAlertMessage] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [userProfile, setUserProfile] = useState({})
  const [updatedPhoto, setUpdatedPhoto] = useState(userProfile?.photo)
  const fileInputRef = useRef(null)
  const { id } = useParams()

  useEffect(() => {
    fetchUser(id)
  }, [])

  const fetchUser = (id) => {
    getUser(id)
      .then((data) => {
        setUserProfile(data)
      })
      .catch(() => {
        setUserProfile({})
      })
  }

  return (
    <section className={styles.container}>
      <GoBackButton />

      <UserProfileImage
        inputsDisabled={inputsDisabled}
        setInputsDisabled={setInputsDisabled}
        dialogIsOpen={dialogIsOpen}
        setDialogIsOpen={setDialogIsOpen}
        showAlertMessage={showAlertMessage}
        setShowAlertMessage={setShowAlertMessage}
        userProfile={userProfile}
        userPhotoUrl={userProfile?.photo}
        fileInputRef={fileInputRef}
        updatedPhoto={updatedPhoto}
        setSelectedFile={setSelectedFile}
      />

      <UserDataView
        inputsDisabled={inputsDisabled}
        userProfile={userProfile}
        selectedFile={selectedFile}
        setUpdatedPhoto={setUpdatedPhoto}
      />
      {dialogIsOpen && (
        <UserModal
          userId={id}
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
          actionType="disable"
          enabled={userProfile?.enabled}
          refetchUser={() => fetchUser(id)}
        />
      )}
      {showAlertMessage && (
        <UserModal
          userId={id}
          dialogIsOpen={showAlertMessage}
          setDialogIsOpen={setShowAlertMessage}
          actionType="delete"
          enabled={userProfile?.enabled}
          refetchUser={() => fetchUser(id)}
        />
      )}
    </section>
  )
}

export default DashboardUserById
