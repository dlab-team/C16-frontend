'use client'
import { useState } from 'react'
import { DeleteResourceModal, GoBackButton } from '../../components'
import { UserDataView, UserProfileImage } from './components'
import styles from './styles/DashboardUserById.module.css'
import { SaveButton } from '@/app/(profile)/perfil/components'

const DashboardUserById = () => {
  const [inputsDisabled, setInputsDisabled] = useState(true)
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const [showAlertMessage, setShowAlertMessage] = useState(false)

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
      />
      <UserDataView inputsDisabled={inputsDisabled} />
      {!inputsDisabled && (
        <div className={styles.wrapper}>
          <div className={styles.saveButtonContainer}>
            <SaveButton />
          </div>
        </div>
      )}
      {dialogIsOpen && (
        <DeleteResourceModal
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
          message="¿Estás seguro que deseas bloquear este usuario?"
          cancelButtonText="Cancelar"
          okButtontext="Bloquear"
        />
      )}
      {showAlertMessage && (
        <DeleteResourceModal
          dialogIsOpen={showAlertMessage}
          setDialogIsOpen={setShowAlertMessage}
          message="¿Estás seguro que deseas eliminar este usuario?"
          cancelButtonText="Cancelar"
          okButtontext="Eliminar"
        />
      )}
    </section>
  )
}

export default DashboardUserById
