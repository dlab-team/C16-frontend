'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { MdArrowBackIos } from 'react-icons/md'
import styles from './styles/ResourcesTopView.module.css'

const ResourcesTopView = () => {
  const router = useRouter()

  return (
    <>
      <div className={styles.mobileContainer}>
        <button onClick={() => router.back()} className={styles.goBackButton}>
          <MdArrowBackIos size={'1.3rem'} />
        </button>
        <h4 className={styles.title}>Recursos</h4>
      </div>
      {/* desktop */}
      <div className={styles.desktopContainer}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Flibro.png?alt=media&token=c82c63ff-3f56-4246-8317-d0c4fde1c08f"
          alt="libro-recursos-de-apoyo"
          width={500}
          height={300}
          loading="lazy"
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.desktopTitle}>
            Apoyo <span className={styles.span}>al Ciudado</span>
          </h1>
          <h4 className={styles.subtitle}>
            Revisa todo el material que tenemos disponible para ti
          </h4>
        </div>
      </div>
    </>
  )
}

export default ResourcesTopView
