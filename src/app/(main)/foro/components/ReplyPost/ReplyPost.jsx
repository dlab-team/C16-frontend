'use client'

import { useState, useContext } from 'react';
import styles from './RepliePost.module.css'
import { useRouter } from 'next/navigation';
import { UserContext } from '@/components/context/userContext';
import { createPost } from '@/services/api/api.post.service';
import { successMessage, errorMessage, infoMessage } from '@/utils/notify';



function ReplyPost({ parentId }) {
    const [text, setText] = useState('')
    const route = useRouter()
    const { user, updateToken, deleteUser } = useContext(UserContext)

    const replyPost = () => {
        if (!text.trim()) return;
        const body = {
            content: text,
            userId: user.data.id,
            parentId: parentId
        }

        createPost(user.token, body)
            .then(response => {
                switch (response.status) {
                    case 201:
                        setText('')
                        successMessage('Respuesta publicada con éxito')
                        route.refresh()
                        break;
                    case 400:
                        errorMessage('Hubo un error al publicar tu respuesta, intente más tarde.')
                        deleteUser()
                        route.push('/auth/login')
                        break;
                    case 401:
                        updateToken().then((res) => {
                            if (res) {
                                infoMessage('No se pudo publicar tu respuesta, intente nuevamente.')
                            } else {
                                route.push('/auth/login')
                            }
                        })
                        break;
                    default:
                        throw new Error('Unhandled status code');
                }
            })
            .catch(err => {
                errorMessage('Hubo un error al publicar tu comentario, intente más tarde.')
            })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        replyPost()
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Previene el comportamiento por defecto para todas las situaciones con la tecla Enter
            if (event.shiftKey) {
                // Agrega un salto de línea si se presiona Shift+Enter
                setText(text => text + '\n');
            } else {
                // Envía el formulario solo si es Enter solo
                replyPost();
            }
        }
    };
    return (
        <form className={styles.inputCommentBox} onSubmit={formSubmit}>
            <textarea
                className={styles.commentInput}
                type="text"
                placeholder='Escribe tu comentario'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className={styles.sendBtn}></button>
        </form>
    )
}

export default ReplyPost
