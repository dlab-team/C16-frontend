'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { MdArrowBackIos } from 'react-icons/md'
import styles from './styles/AcademyTopView.module.css'

const AcademyTopView = () => {
  const router = useRouter()

  return (
    <>
      <div className={styles.mobileContainer}>
        <button onClick={() => router.back()} className={styles.goBackButton}>
          <MdArrowBackIos size={'1.3rem'} />
        </button>
        <h4 className={styles.title}>Academia</h4>
      </div>
      {/* desktop */}
      <div className={styles.desktopContainer}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fimage.png?alt=media&token=32629d2b-785a-4778-8d8a-9dfd1b96c9b4"
          alt="libro-recursos-de-apoyo"
          width={500}
          height={300}
          loading="lazy"
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.desktopTitle}>Academia</h1>
          <h4 className={styles.subtitle}>
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit
          </h4>
        </div>
      </div>
    </>
  )
}

export default AcademyTopView
