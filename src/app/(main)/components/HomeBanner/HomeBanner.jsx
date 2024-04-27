'use client'

import { useState } from 'react';
import styles from './HomeBanner.module.css'
import Modal from '@/app/(auth)/auth/login/ModalLogin/ModalLogin';
import { UserContext } from '@/components/context/userContext';

function HomeBanner() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <section className={styles.section_banner} role="banner" >
                <img className={styles.image_container} src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fmanos_unidas.png?alt=media&token=f47a7fc7-7178-4e91-932f-11e43f68d4d"></img>

                <div className={styles.sheet}>
                    <div className={styles.infoBanner}>
                        <h1 className={styles.title}>Uniendo a <strong className={styles.titleAccent}>Cuidadores</strong></h1>
                        <p className={styles.message}>Únete a la red más grande de apoyo para cuidadores</p>
                    </div>
                    <button className={styles.modalBtn} onClick={() => setIsOpen(true)}>
                        Inscríbete
                    </button>

                </div>
            </section>
            <Modal isOpen={isOpen} onClose={closeModal} />
        </>
    )
}

export default HomeBanner
