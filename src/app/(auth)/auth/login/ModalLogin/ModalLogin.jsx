import React from 'react';
import styles from '../styles/Login.module.css';
import { LoginForm} from '../components';
import { IoIosArrowBack, IoIosClose } from 'react-icons/io';

const Modal = ({ isOpen, onClose}) => {

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.closeButtonX} onClick={onClose}>
                    <IoIosClose className={styles.xButton} onClick={onClose} />
                </button>
                <div className={styles.modalContainer}>
                    <button className={styles.closeButtonBack} onClick={onClose}>
                        <IoIosArrowBack className={styles.backButton} onClick={onClose} />
                    </button>
                    <main className={styles.container}>
                        <img className={styles.image} src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fmanos-unidas-login.png?alt=media&token=d198f46b-3108-42b2-b132-436abb7d9816"></img>
                        <h3 className={styles.title}>Iniciar Sesión</h3>
                        <section className={styles.wrapper}>
                            <LoginForm />
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Modal;