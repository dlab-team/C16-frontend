'use client'

import {useContext, useState, useEffect} from 'react'
import { UserContext } from '@/components/context/userContext'
import styles from './Welcome.module.css'

function Welcome() {
    const {user}= useContext(UserContext)
    const [info, setInfo]=useState('Bienvenid@')
    
    useEffect(()=>{
        if(user.logged){
            switch (user.data.gender) {
                case 'Sin especificar':
                    setInfo(`Bienvenid@ ${user.data.firstname}`)
                    break;
                case 'hombre':
                    setInfo(`Bienvenido ${user.data.firstname}`)
                    break;
                    
                default:
                    setInfo(`Bienvenida ${user.data.firstname}`)
                    break;
            }
        }

    },[user])
    return (
        <h1 className={styles.welcome_title}>{info}</h1>
    )
}

export default Welcome
