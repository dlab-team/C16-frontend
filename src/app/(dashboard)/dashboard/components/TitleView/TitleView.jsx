'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { PiUploadSimpleBold } from 'react-icons/pi'
import { AiTwotoneInfoCircle } from 'react-icons/ai'
import styles from './styles/TitleView.module.css'

const TitleView = ({ title, italicTitle, showIcons, redirectTo }) => {
  const router = useRouter()
  const [showMessageInfo, setShowMessageInfo] = useState(false)

  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        {title} <span className={styles.span}>{italicTitle}</span>
      </h1>
      {showIcons && (
        <div className={styles.uploadButtonContainer}>
          <button
            className={styles.uploadButton}
            onClick={() => router.push(`${redirectTo}`)}
          >
            <PiUploadSimpleBold size={38} />
          </button>
          {showMessageInfo && (
            <div className={styles.messageContainer}>
              <span className={styles.message}>Subir archivo</span>
            </div>
          )}
          <button
            className={styles.infoButton}
            onClick={() => setShowMessageInfo(!showMessageInfo)}
          >
            <AiTwotoneInfoCircle size={18} />
          </button>
        </div>
      )}
    </div>
  )
}

export default TitleView
