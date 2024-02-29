'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Modal from '@/components/ModalRegistro/ModalRegistro';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <main className={styles.main}>
      <div className={styles.section_switch}>

        {/* Seccion Banner */}

        <section className={styles.section_banner}>
          <img className={styles.image_container} src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fmanos_unidas.png?alt=media&token=f47a7fc7-7178-4e91-932f-11e43f68d4d"></img>

          <div className={styles.modal_conteiner}>
            <div className={styles.text_conteiner}>
              
              <h1>
                <span className={styles.title_uniendo}>Uniendo</span>
                <span className={styles.title_uniendo}> a</span>
                <span className={styles.title_cuidadores}> Cuidadores</span>
              </h1>

              <p className={styles.text_banner}>
                Únete a la red más grande de apoyo para cuidadores
              </p>
            </div>

            <button onClick={() => setIsOpen(true)} id={styles.modal_button}>
              {' '}
              Inscríbete
              {' '}
            </button>
            <Modal isOpen={isOpen} onClose={closeModal}>
              <h2>Modal Registro</h2>
              <p>¡Este es el contenido del modal!</p>
            </Modal>
          </div>
        </section>

        {/* Seccion Bienvenida*/}

        <section className={styles.welcome_section}>
          <h1 className={styles.welcome_title}>Bienvenid@s</h1>
          <p className={styles.welcome_p}>
            Lörem ipsum ösegarade agnostistat, myviras om än mydat pängen.
            Aspludd trir. Ire astropod den lalig presaning: i vigisk. Exoktigt
            his senän.
          </p>
        </section>
      </div>

      {/* Seccion Tarjetas Home*/}

      <section className={styles.home_cards}>
        <div className={styles.academia}>
          <Link href='/academia' className={styles.link}>
            <span className={styles.text_link}>Academia</span>
            <button className={styles.arrow_btn}></button>
          </Link>
          <p className={styles.cards_p}>
            Revisa videos, guías y material descargable
          </p>
        </div>

        <div className={styles.foro}>
          <Link href='/foro' className={styles.link}>
            <span className={styles.text_link}>Foro</span>
            <button className={styles.arrow_btn}></button>
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
