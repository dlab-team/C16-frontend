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
        {/* Seccion Modal y Carrusel */}
        <section className={styles.section_card_modal}>
          <div className={styles.card_modal}>
            <div className={styles.card_modal_text}>
              <h3 className={styles.card_title}>Dysgen retåse</h3>
              <p className={styles.card_text}>
                Lörem ipsum parasat ponerade, vabåligt järad. Kroling eus
                benöna. Terakadade postsocial, synösamma, ossa, agnostilog.
                Bingen äspevis.
              </p>
              <button onClick={() => setIsOpen(true)} id={styles.modal_button}>
                {' '}
                Quiero ser parte{' '}
              </button>
              <Modal isOpen={isOpen} onClose={closeModal}>
                <h2>Modal Registro</h2>
                <p>¡Este es el contenido del modal!</p>
              </Modal>
            </div>
          </div>
        </section>

        <section className={styles.welcome_section}>
          <h1 className={styles.welcome_title}>Bienvenid@s</h1>
          <p className={styles.welcome_p}>
            Lörem ipsum ösegarade agnostistat, myviras om än mydat pängen.
            Aspludd trir. Ire astropod den lalig presaning: i vigisk. Exoktigt
            his senän.
          </p>
        </section>
      </div>

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
