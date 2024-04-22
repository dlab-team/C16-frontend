'use client'

import { useEffect, useState, useContext } from 'react';
import styles from './PostToogle.module.css'
import Modal from '../Modal/Modal';
import Link from 'next/link';
import { dateSince } from '../../utils/dateSince';
import { dateFormat } from '../../utils/dateFormat';
import ModalPortal from '../ModalPortal/ModalPortal';
import ReplyPost from '../ReplyPost/ReplyPost';
import { reportPost } from '@/services/api/api.post.service';
import { UserContext } from '@/components/context/userContext';


// recibe por parámetros la información del comentario y el tipo
// type="detail" si es para la vista detalle del comentario
// type="pubications" si es para la vista de la lista de comentarios
function PostToggle({ data, type = "detail" }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user } = useContext(UserContext)

    // Función para cambiar el estado de visibilidad
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleReportPost = () => {
        reportPost(user.token, data.id)
        alert('Comentario reportado')
        closeModal()
    }

    useEffect(() => {
        if (type == 'detail') {
            setIsVisible(true)
        }
    }, []);

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
                    <span className={styles.time}>{"hace "+dateSince(data.createdAt)}</span>
                    <span className={styles.date}>{dateFormat(data.createdAt)}</span>
                </div>

                <div className={styles.actionsBox}>
                    <div className={styles.action}>
                        <div className={styles.likeIcon}></div>
                        <span className={styles.actionText}>Me Gusta</span>
                    </div>
                    {
                        type == "detail" ?
                            <button onClick={toggleVisibility} className={styles.action}>
                                <div className={styles.commentIcon}></div>
                                <span className={styles.actionText}>Comentar</span>
                            </button>
                            :
                            <Link href={`/foro/comentario/${data.id}`} className={styles.linkComment}>
                                <button className={styles.action}>
                                    <div className={styles.commentIcon}></div>
                                    <span className={styles.actionText}>Comentar</span>
                                </button>
                            </Link>
                    }



                    <button onClick={openModal} className={styles.action}>
                        <div className={styles.reportIcon}></div>
                        <span className={styles.actionText}>Reportar</span>
                    </button>

                </div>
            </div>


            <ModalPortal>
                <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleReportPost} />
            </ModalPortal>


            {
                isVisible && (
                    <ReplyPost parentId={data.id}/>
                )
            }


        </>
    )
}

export default PostToggle
