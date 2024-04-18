'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineCheck, AiOutlineEdit } from 'react-icons/ai'
import { FiTrash } from 'react-icons/fi'
import styles from './styles/ResourceView.module.css'
import { DeleteResourceModal } from '../../../components'

const ResourceView = () => {
  const router = useRouter()
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Image
            width={130}
            height={95}
            src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg"
            alt="Resource"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <h5 className={styles.title}>Descripción</h5>
            <p className={styles.description}>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <label htmlFor="remember" className={styles.rememberInput}>
              <div className={styles.checkboxContainer}>
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className={styles.checkboxRound}
                />
                <span className={styles.span}>
                  <AiOutlineCheck size={10} />
                </span>
              </div>
              Destacar recurso
            </label>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.wrapper}>
            <h5 className={styles.title}>Comuna</h5>
            <p className={styles.description}>Providencia</p>
          </div>
          <div className={styles.wrapper}>
            <h5 className={styles.title}>Link</h5>
            <Link href="#" className={styles.description}>
              http
            </Link>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${styles.edit}`}
              onClick={() => router.push('/dashboard/recursosdeapoyo/1')}
            >
              <AiOutlineEdit size={20} />
            </button>
            <button
              className={`${styles.button} ${styles.remove}`}
              onClick={() => setDialogIsOpen(!dialogIsOpen)}
            >
              <FiTrash size={20} />
            </button>
          </div>
        </div>
      </div>
      {dialogIsOpen && (
        <DeleteResourceModal
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
        />
      )}
    </>
  )
}

export default ResourceView
