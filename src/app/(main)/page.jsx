'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { IoIosArrowForward } from "react-icons/io";
import Modal from '../(auth)/auth/login/LoginDesktop/LoginDesktop';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <main className={styles.main}>
      <div className={styles.section}>

        {/* ----- Seccion Banner ----- */}

        <section className={styles.section_banner}>
          <img className={styles.image_container} src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fmanos_unidas.png?alt=media&token=f47a7fc7-7178-4e91-932f-11e43f68d4d"></img>

          <div className={styles.text_container}>
            <div className={styles.text_banner}>
              <h1>
                <span className={styles.title_uniendo}>Uniendo</span>
                <span className={styles.title_uniendo}> a</span>
                <span className={styles.title_cuidadores}> Cuidadores</span>
              </h1>
              <p className={styles.detail_banner}>
                Únete a la red más grande de apoyo para cuidadores
              </p>
            </div>
              <button onClick={() => setIsOpen(true)} id={styles.modal_button}>
                {' '}
                Inscríbete
                {' '}
              </button>
            <Modal isOpen={isOpen} onClose={closeModal} />
          </div>
        </section>

        {/* ----- Welcome Section ----- */}

        <section className={styles.welcome_section}>
          <h1 className={styles.welcome_title}>Bienvenid@</h1>
          <p className={styles.welcome_p}>
            Sabemos lo desafiante que puede ser asumir este rol, por eso estamos para ayudarte en cada paso del camino.
          </p>
        </section>
      </div>

      {/* ----- Home Card Section ----- */}

      <section className={styles.home_cards}>
        <div className={styles.academia}>
          <Link href='/academia' className={styles.link}>
            <span className={styles.text_link}>Academia</span>
            <button className={styles.arrow_btn}>
              <IoIosArrowForward className={styles.arrow_btn} />
            </button>
          </Link>
          <p className={styles.cards_p}>
            Revisa videos, guías y material descargable
          </p>
        </div>

        <div className={styles.foro}>
          <Link href='/foro/recientes' className={styles.link}>
            <span className={styles.text_link}>Foro</span>
            <button className={styles.arrow_btn}>
              <IoIosArrowForward className={styles.arrow_btn} />
            </button>
          </Link>
          <p className={styles.cards_p}>
            Entabla conversaciones con otros cuidadores, pregunta o responde
            preguntas de otros.
          </p>
        </div>
      </section>
    </main>
  );
}
