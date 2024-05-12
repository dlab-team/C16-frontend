'use client'
import styles from './styles/Page.module.css'
import { useProfile, useWindowDimensions } from './hooks'
import { GoBackButton, UserImageView } from './components'
import { AiOutlineLogout } from 'react-icons/ai'
import { UserContext } from '@/components/context/userContext'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

const perfil = () => {
  const { width } = useWindowDimensions()
  const {
    BUTTONS_NAMES,
    handleSelectComponentId,
    renderRightComponent,
    showMainMenu,
    handleGoBack,
    optionSelected,
  } = useProfile()

  const { deleteUser } = useContext(UserContext)
  const router = useRouter()

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        {!showMainMenu && <GoBackButton handleGoBack={handleGoBack} />}
        <UserImageView />
        {showMainMenu && (
          <div className={styles.buttonsContainer}>
            <div className={styles.userInfoContainer}>
              <h5 className={styles.userName}>Teresa Galdames</h5>
              <h6 className={styles.userEmail}>angelagaldames@gmail.com</h6>
            </div>
            {BUTTONS_NAMES?.map((button) => (
              <button
                key={button?.id}
                className={`${styles.mainButtons} ${optionSelected === button?.id && styles.buttonSelected}`}
                onClick={() => handleSelectComponentId(button?.id)}
              >
                {button.icon}
                {button.name}
              </button>
            ))}

              <button
                className={`${styles.mainButtons} ${optionSelected}`}
                onClick={() => {
                  deleteUser()
                  router.refresh()
                }}
              >
                <AiOutlineLogout />
                Cerrar Sesión
              </button>
          </div>
        )}
      </div>
      {!showMainMenu || width >= 920 ? (
        <aside className={styles.aside}>{renderRightComponent()}</aside>
      ) : (
        <></>
      )}
    </main>
  )
}

export default perfil
