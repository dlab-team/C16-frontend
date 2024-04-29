'use client'

import { useState, useContext, useEffect } from 'react';
import styles from './HomeBanner.module.css'
import Modal from '@/app/(auth)/auth/login/ModalLogin/ModalLogin';
import { UserContext } from '@/components/context/userContext';


function HomeBanner() {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);

    const { user } = useContext(UserContext)
    const [info, setInfo] = useState({
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FimgHoma2.png?alt=media&token=2cc5a881-de4a-4de0-b005-c9ec83fc4164',
        title: 'Uniendo a ',
        titleAccent: 'Cuidadores',
        message: 'Únete a la red más grande de apoyo para cuidadores'
    })



    useEffect(() => {
        if (user.logged) {
            setInfo({
                imgUrl: 'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FimgHome.png?alt=media&token=d3d531df-f1ae-4411-bec6-331882385a44',
                title: 'Red Nacional de ',
                titleAccent: 'Cuidados',
                message: 'Únete a la red más grande de apoyo para cuidadores',
            })
            setIsOpen(false)
        }
    }, [user])

    return (
        <>
            <section className={styles.section_banner} role="banner" >
                <img className={styles.image_container} src={info.imgUrl} alt='Imagen de la red nacional de cuidados'></img>

                <div className={styles.sheet}>
                    <div className={styles.infoBanner}>
                        <h1 className={styles.title}>{info.title}<strong className={styles.titleAccent}>{info.titleAccent}</strong></h1>
                        <p className={styles.message}>{info.message}</p>
                    </div>
                    {!user.logged &&
                        <button className={styles.modalBtn} onClick={() => setIsOpen(true)}>
                            Inscríbete
                        </button>
                    }

                </div>
            </section>
            <Modal isOpen={isOpen} onClose={closeModal} />
        </>
    )
}

export default HomeBanner
