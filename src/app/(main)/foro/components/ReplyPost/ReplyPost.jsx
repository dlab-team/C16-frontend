'use client'
import { useState, useContext } from 'react';
import styles from './RepliePost.module.css'
import { useRouter } from 'next/navigation';
import { UserContext } from '@/components/context/userContext';
import { createPost } from '@/services/api/api.post.service';


function ReplyPost({parentId}) {
    const [text, setText] = useState('')
    const route = useRouter()
    const { user } = useContext(UserContext)
    

    const formSubmit = (e) => {
        e.preventDefault()

        const body={
            content:text,
            userId:user.data.id,
            parentId:parentId
        }

        createPost(user.token, body)
        .then(()=>alert('mensaje enviado'))
        .catch(err=> console.log('++++++++++++++++++++', err))
        .finally(()=> {
            setText('')
            route.refresh()
        })
    }
    return (
        <form className={styles.inputCommentBox} onSubmit={formSubmit}>
            <input 
            className={styles.commentInput} 
            type="text" 
            placeholder='Escribe tu comentario' 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>
            <button className={styles.sendBtn}></button>
        </form>
    )
}

export default ReplyPost
