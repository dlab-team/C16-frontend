'use client'
import styles from './styles/Page.module.css'
import { useProfile, useWindowDimensions } from './hooks'
import { GoBackButton, UserImageView } from './components'

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
