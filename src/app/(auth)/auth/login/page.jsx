import Link from "next/link"
import React from 'react';
import styles from './styles/Login.module.css';
import { LoginForm } from "./components";
import { IoIosArrowBack, IoIosClose } from 'react-icons/io';

function Login() {

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <Link href='/' className={styles.closeButtonX}>
                    <button className={styles.closeButtonX} >
                        <IoIosClose className={styles.xButton} />
                    </button>
                </Link>
                <div className={styles.modalContainer}>
                    <Link href='/' className={styles.closeButtonX}>
                        <button className={styles.closeButtonBack}>
                            <IoIosArrowBack className={styles.backButton} />
                        </button>
                    </Link>
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

export default Login
