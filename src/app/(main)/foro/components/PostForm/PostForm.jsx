'use client'

import { useState, useContext } from 'react'
import styles from './PostForm.module.css'
import { useRouter } from 'next/navigation';
import { UserContext } from '@/components/context/userContext';
import { createPost } from '@/services/api/api.post.service';
import { successMessage, errorMessage, infoMessage } from '@/utils/notify';

function PostForm() {
    const [text, setText] = useState('')
    const route = useRouter()
    const { user, deleteUser, updateToken } = useContext(UserContext)

    const formSubmit = (e) => {
        e.preventDefault()
        createPost(
            user.token,
            { content: text })
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

    return (
        <>
            <form className={styles.inputBox} onSubmit={formSubmit}>
                <input
                    className={styles.commentInput}
                    type="text"
                    placeholder='Escribe tu comentario'
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)} />

                <button className={styles.sendIcon} type='submit'></button>
            </form>
        </>
    )
}

export default PostForm



