'use client'
import styles from './styles/Page.module.css'
import { useProfile } from './hooks'
import { UserImageView } from './components'

const perfil = () => {
  const {
    BUTTONS_NAMES,
    handleSelectComponentId,
    renderRightComponent,
    showMainMenu,
  } = useProfile()

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
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
                className={styles.mainButtons}
                onClick={() => handleSelectComponentId(button?.id)}
              >
                {button.icon}
                {button.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <aside className={styles.aside}>{renderRightComponent()}</aside>
    </main>
  )
}

export default perfil
