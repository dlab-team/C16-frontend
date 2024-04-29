'use client'

import { useState, useContext } from 'react'
import styles from './PostForm.module.css'
import { useRouter } from 'next/navigation';
import { UserContext } from '@/components/context/userContext';
import { createPost } from '@/services/api/api.post.service';
import { successMessage, errorMessage } from '@/utils/notify';

function PostForm() {
    const [text, setText] = useState('')
    const route = useRouter()
    const {user} = useContext(UserContext)
    
    const formSubmit = (e) => {
        e.preventDefault()
        createPost(
            user.token, 
            {content:text})
        .then(response=>{
            if(response.ok){
                setText('')
                successMessage('Mensaje publicado con éxito')
                route.refresh()
            }else{
                errorMessage('Hubo un error al publicar tu comentario, intente más tarde.')
            }
        })
        .catch(err=> errorMessage('Hubo un error al publicar tu comentario, intente más tarde.'))
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



