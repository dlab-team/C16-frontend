'use client'

import { useEffect, useState, useContext } from 'react';
import styles from './PostToogle.module.css'
import Modal from '../Modal/Modal';
import Link from 'next/link';
import { dateSince } from '../../utils/dateSince';
import { dateFormat } from '../../utils/dateFormat';
import ModalPortal from '../ModalPortal/ModalPortal';
import ReplyPost from '../ReplyPost/ReplyPost';
import { reportPost, like } from '@/services/api/api.post.service';
import { UserContext } from '@/components/context/userContext';
import { successMessage, errorMessage, infoMessage } from '@/utils/notify';
import formatCount from '../../utils/countFormat';
import { useRouter } from 'next/navigation';

// recibe por parámetros la información del comentario y el tipo
// type="detail" si es para la vista detalle del comentario
// type="pubications" si es para la vista de la lista de comentarios
function PostToggle({ data, type = "detail" }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user, updateToken, deleteUser } = useContext(UserContext)
    const router = useRouter()


    // Función para cambiar el estado de visibilidad
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleReportPost = () => {
        reportPost(user.token, data.id)
            .then(response => {
                switch (response.status) {
                    case 200:
                        successMessage('El comentario ha sido reportado correctamente.')
                        break;
                    case 400:
                        errorMessage('Hubo un error al reportar el comentario, intente más tarde.')
                        deleteUser()
                        router.push('/auth/login')
                        break;
                    case 401:
                        updateToken().then((res) => {
                            if (res) {
                                infoMessage('No se pudo reportar el comentaio, intente nuevamente.')
                            } else {
                                router.push('/auth/login')
                            }
                        })
                        break;
                    case 404:
                        errorMessage('No se pudo encontrar el comentario, Probablemente haya sido eliminado.')
                        break;
                    default:
                        errorMessage('No se pudo encontrar realizar la operación. Intente más tarde')
                        deleteUser()
                        router.push('/')
                        break;
                }
            })
            .catch(err => {
                errorMessage('No se pudo encontrar realizar la operación. Intente más tarde')
                deleteUser()
                router.push('/')
            })
            .finally(() => closeModal())

    }
    const sameId = () => {
        return user.data.id === data.userId ? true : false
    }
    const handleLike = () => {
        like(user.token, data.id).then((response) => {
            switch (response.status) {
                case 200:
                    router.refresh()
                    break;
                case 400:
                    deleteUser()
                    router.push('/auth/login')
                    break;
                case 401:
                    updateToken().then((res) => {
                        if (res) {
                            infoMessage('No se pudo procesar el "me gusta", intente nuevamente.')
                        } else {
                            router.push('/auth/login')
                        }
                    })
                    break;
                case 404:
                    errorMessage('No se pudo encontrar el comentario, Probablemente haya sido eliminado.')
                    break;
                default:
                    errorMessage('No se pudo encontrar realizar la operación. Intente más tarde')
                    deleteUser()
                    router.push('/')
                    break;
            }
        })
            .catch(err => {
                errorMessage('No se pudo encontrar realizar la operación. Intente más tarde')
                deleteUser()
                router.push('/')
            })
    }

    useEffect(() => {
        if (type == 'detail') {
            setIsVisible(true)
        }
    }, []);

    return (
        <>
            <div className={styles.postFooter}>
                <div className={styles.timeBox}>
                    <span className={styles.time}>{"hace " + dateSince(data.createdAt)}</span>
                    <span className={styles.date}>{dateFormat(data.createdAt)}</span>
                </div>

                <div className={styles.actionsBox}>
                    <button className={styles.action} onClick={handleLike}>
                        <span className={styles.counter}>{formatCount(data.likesCount)}</span>
                        <div className={styles.likeIcon}></div>
                        <span className={styles.actionText}>Me Gusta</span>
                    </button>
                    {
                        type == "detail" ?
                            <button onClick={toggleVisibility} className={styles.action}>
                                <span className={styles.counter}>{formatCount(data.repliesCount)}</span>
                                <div className={styles.commentIcon}></div>
                                <span className={styles.actionText}>Comentar</span>
                            </button>
                            :
                            <Link href={`/foro/comentario/${data.id}`} className={styles.linkComment}>
                                <button className={styles.action}>
                                    <span className={styles.counter}>{formatCount(data.repliesCount)}</span>
                                    <div className={styles.commentIcon}></div>
                                    <span className={styles.actionText}>Comentar</span>
                                </button>
                            </Link>
                    }

                    <button onClick={openModal} className={sameId() ? styles.actionDisable : styles.action} disabled={sameId()}>
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
                    <ReplyPost parentId={data.id} />
                )
            }


        </>
    )
}

export default PostToggle
