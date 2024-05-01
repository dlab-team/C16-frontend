'use client'

import { useState } from 'react'
import { resetPasword } from '@/services/user.fire.service'
import Modal from '../Modal/Modal'
import styles from './SendForm.module.css'
import ModalPortal from '../ModalPortal/ModalPortal'

function SendForm() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newPassword, setNewPassword] = useState('')
    const [modalInfo, setmodalInfo] = useState({
        title:'Hemos enviado un enlace a tu correo electronico.',
        message:'Por favor verifica tu bandeja de entrada y sigue los pasos para cambiar su contraseña.',
        urlRedirect:'/auth/login'
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        await resetPasword()
        .catch((error)=>{
            setmodalInfo({
                title:'No hemos podido enviar el correo.',
                message:'Por favor verifica que el correo ingresado sea el correcto',
                urlRedirect:'#'
            })
        })
        .finally(()=>{
            openModal()
        })

    }
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label className={styles.label} htmlFor='email'>Tu correo electronico</label>
                <input className={styles.input} type="email" id='email' placeholder='correo@electronico.com'  onChange={(e) => setNewPassword(e.target.value)} required/>
                <div className={styles.btnBox}>
                    <button className={styles.sendBtn} type='send'>Continuar</button>
                </div>
            </form>
            <ModalPortal>

                <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal}
                info={modalInfo}
                />
            </ModalPortal>

        </div>
    )
}

export default SendForm
