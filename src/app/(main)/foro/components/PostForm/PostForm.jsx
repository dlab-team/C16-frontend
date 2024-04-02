'use client'
import { useState } from 'react'
import styles from './PostForm.module.css'
import { useRouter } from 'next/navigation';

const sendPost = async ( data = {}) => {
    const response = await fetch(`https://c16-backend.onrender.com/api/posts/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data), 
    });
    return response.json()

}

function PostForm() {
    const [text, setText] = useState('')
    const route = useRouter()
    

    const formSubmit = (e) => {
        e.preventDefault()
        sendPost({
            content:text,
            userId:'XCZ1234SMASJsP'
        })
        .then(data=>console.log(data))
        .catch(err=> console.log('++++++++++++++++++++', err))
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



