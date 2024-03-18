import React from 'react';
import styles from '../styles/Login.module.css';
import { LoginForm, LoginImage } from '../components';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalContainer}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButtonBack} onClick={onClose}>
                        <IoIosArrowBack className={styles.backButton} onClick={onClose}/>
                        </button>
                        <button className={styles.closeButton} onClick={onClose}>
                        <IoIosClose className={styles.xButton} onClick={onClose}/>
                        </button>
                        <main className={styles.container}>
                            <LoginImage />
                            <section className={styles.wrapper}>
                                <h3 className={styles.title}>Iniciar Sesión</h3>
                                <LoginForm />
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;