"use client"

import React, { useState } from 'react';
import styles from "./page.module.css"
import Link from "next/link";
import Modal from '@/components/ModalRegistro/ModalRegistro';

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <main className={styles.main}>
            <section className={styles.section}>Seccion 1 - Home</section>

            {/* Seccion Carrousel y Modal */}

            <section className={styles.section}>
                <div className={styles.card_modal}>
                    <div className={styles.card_modal_text}>
                        <h3 className={styles.card_title}>Dysgen retåse</h3>
                        <p className={styles.card_text}>Lörem ipsum parasat ponerade, vabåligt järad. Kroling eus benöna. Terakadade postsocial, synösamma, ossa, agnostilog. Bingen äspevis.</p>
                        <button onClick={() => setIsOpen(true)} id={styles.modal_button}> Quiero ser parte </button>
                        <Modal isOpen={isOpen} onClose={closeModal}>
                            <h2>Modal Registro</h2>
                            <p>¡Este es el contenido del modal!</p>
                        </Modal>
                    </div>
                </div>
            </section>

            <section className={styles.home_cards}>
                <div className={styles.academia}>
                    <p className={styles.cards_p}>Lörem ipsum ifaforat pseudonomi oaktat kvasinera, antisiligen. Görad krol som vasade: nuse, fast mönde ladat. Däning kontralöst, misosk kahint därför att eurogov. Pretäda astrossa, plus kvasihon.</p>
                    <Link href="/academia" className={styles.link}>
                        <span className={styles.text_link}>Academia</span>
                        <button className={styles.arrow_btn}></button>
                    </Link>
                </div>

                <div className={styles.foro}>
                    <p className={styles.cards_p}>Lörem ipsum ifaforat pseudonomi oaktat kvasinera, antisiligen. Görad krol som vasade: nuse, fast mönde ladat. Däning kontralöst, misosk kahint därför att eurogov. Pretäda astrossa, plus kvasihon.</p>
                    <Link href="/foro" className={styles.link}>
                        <span className={styles.text_link}>Foro</span>
                        <button className={styles.arrow_btn}></button>
                    </Link>
                </div>
            </section>
        </main>
    );
}