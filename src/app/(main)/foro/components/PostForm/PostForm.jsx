'use client'

import { useState, useContext } from 'react'
import styles from './PostForm.module.css'
import { useRouter } from 'next/navigation';
import { UserContext } from '@/components/context/userContext';

import { createPost } from '@/services/api/api.post.service';


function PostForm() {
    const [text, setText] = useState('')
    const route = useRouter()
    const {user} = useContext(UserContext)
    
    const formSubmit = (e) => {
        e.preventDefault()
        createPost(
            user.token, 
            {content:text})
        .catch(err=> console.error('++++++++++++++++++++', err))
        .finally(()=> route.refresh())
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



