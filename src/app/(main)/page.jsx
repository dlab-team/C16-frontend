'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { IoIosArrowForward } from 'react-icons/io'
import HomeBanner from './components/HomeBanner/HomeBanner'
import Welcome from './components/Welcome/Welcome'
import { useContext } from 'react'

import { UserContext } from '@/components/context/userContext'

export default function Home() {
  const closeModal = () => setIsOpen(false)

  const { user } = useContext(UserContext)
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        {/* ----- Banner Section ----- */}

        <HomeBanner />

        {/* ----- Welcome Section ----- */}

        <section className={styles.welcome_section}>
          <Welcome />
          {user.logged ? (
            <p className={styles.welcome_p}>
              ¡Nos alegra mucho que seas parte de nuestra comunidad de
              cuidador@s! Estamos aquí para brindarte toda la información y
              herramientas que necesitas para desempeñar tu labor. Además de
              recursos de apoyo al cuidado, también encontrarás contenido de
              autocuidado, desarrollo personal, empleabilidad y la posibilidad
              de conectarte con una red de personas que comparten tu hermosa
              labor. ¡Gracias por unirte a nosotr@s en esta importante misión!
            </p>
          ) : (
            <p className={styles.welcome_p}>
              ¡Bienvenid@ a la primera plataforma digital dedicada a brindar
              apoyo a quienes cuidan! Aquí encontrarás recursos, comunidad y
              asistencia en tu destacada labor.
            </p>
          )}
        </section>
      </div>

      {/* ----- Home Card Section ----- */}

      <section className={styles.home_cards}>
        <div className={styles.academia}>
          <Link href="/academia" className={styles.link}>
            <span className={styles.text_link}>Academia</span>
            <button className={styles.arrow_btn}>
              <IoIosArrowForward className={styles.arrow_btn} />
            </button>
          </Link>
          <p className={styles.cards_p}>
            En esta sección encontrarás herramientas y conocimientos para
            potenciar tu crecimiento tanto profesional como personal.
          </p>
        </div>

        <div className={styles.foro}>
          <Link href="/foro/recientes" className={styles.link}>
            <span className={styles.text_link}>Foro</span>
            <button className={styles.arrow_btn}>
              <IoIosArrowForward className={styles.arrow_btn} />
            </button>
          </Link>
          <p className={styles.cards_p}>
            Bienvenid@ a un espacio de conversación con otras personas que
            ejercen labores de cuidados
          </p>
        </div>
      </section>
    </main>
  )
}
