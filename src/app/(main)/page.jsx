'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Modal from '@/components/ModalRegistro/ModalRegistro';
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <main className={styles.main}>
      <div className={styles.section}>
        {/* Seccion Modal y Carrusel */}
        <section className={styles.section_card_modal}>
          <div className={styles.card_modal}>
            <div className={styles.card_modal_text}>
              <h3 className={styles.card_title}>Uniendo a Cuidadores</h3>
              <p className={styles.card_text}>
                Únete a la red más grande de apoyo para cuidadores
              </p>
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
          </div>
        </section>

        <section className={styles.welcome_section}>
          <h1 className={styles.welcome_title}>Bienvenid@</h1>
          <p className={styles.welcome_p}>
            Sabemos lo desafiante que puede ser asumir este rol, por eso estamos para ayudarte en cada paso del camino.
          </p>
        </section>
      </div>

      <section className={styles.home_cards}>
        <div className={styles.academia}>
          <Link href='/academia' className={styles.link}>
            <span className={styles.text_link}>Academia</span>
            <button className={styles.arrow_btn}>
            <IoIosArrowForward className={styles.arrow_btn}/>
            </button>
          </Link>
          <p className={styles.cards_p}>
            Revisa videos, guías y material descargable
          </p>
        </div>

        <div className={styles.foro}>
          <Link href='/foro' className={styles.link}>
            <span className={styles.text_link}>Foro</span>
            <button className={styles.arrow_btn}>
            <IoIosArrowForward className={styles.arrow_btn}/>
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
