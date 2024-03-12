'use client'

import { useState } from 'react';
import styles from './PostToogle.module.css'
import Modal from '../Modal/Modal';


function PostToggle({ data }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Función para cambiar el estado de visibilidad
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const reportPost = () => {
        alert('Comentario reportado')
        closeModal();
    }

    /* // Función para reportar el post
    const reportPost = () => {
        // Aquí se realizaría el llamado a la API para reportar el post
        // Sustituye la URL y el método según tu implementación específica.
        fetch(`/api/report/${data.id}`, { method: 'POST' })
            .then((response) => {
                if (response.ok) {
                    // Procesa la respuesta satisfactoria
                    alert('El post ha sido reportado.');
                } else {
                    // Maneja una respuesta no satisfactoria
                    alert('Ocurrió un error al intentar reportar el post.');
                }
            })
            .catch((error) => {
                // Maneja errores de red o desconocidos
                console.error('Error al reportar el post:', error);
            })
            .finally(() => {
                // Cierra el modal independientemente del resultado
                closeModal();
            });
    }; */

    return (
        <>
            <div className={styles.postFooter}>
                <div className={styles.timeBox}>
                    <span className={styles.time}>Hace 1 hora</span>
                    <span className={styles.date}>{data.fecha}</span>
                </div>

                <div className={styles.actionsBox}>
                    <div className={styles.action}>
                        <div className={styles.likeIcon}></div>
                        <span className={styles.actionText}>Me Gusta</span>
                    </div>

                    <button onClick={toggleVisibility} className={styles.action}>
                        <div className={styles.commentIcon}></div>
                        <span className={styles.actionText}>Comentar</span>
                    </button>

                    <button onClick={openModal} className={styles.action}>
                        <div className={styles.reportIcon}></div>
                        <span className={styles.actionText}>Reportar</span>
                    </button>

                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={reportPost} />




            {
                isVisible && (
                    <form className={styles.inputCommentBox}>
                        <input className={styles.commentInput} type="text" placeholder='Escribe tu comentario' />
                        <button className={styles.sendBtn}></button>
                    </form>
                )
            }


        </>
    )
}

export default PostToggle
