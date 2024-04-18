'use client'
import { useState, useContext, useEffect} from 'react'
import { UserContext } from '../context/userContext'
import { useRouter, usePathname } from 'next/navigation'

import { auth } from "@/services/firebaseConfig"
import { getUser } from "@/services/api/api.user.service"

const protectedRoutes=[
    '/academia',
    '/foro/*',
    '/perfil',
]

const pathIsProtected = (pathname)=> {
    return protectedRoutes.some(protectedPath => {
        if (protectedPath.endsWith('/*')) {
            const baseRoute = protectedPath.slice(0, -2)
            return pathname.startsWith(baseRoute)
        }
        return pathname === protectedPath || pathname.startsWith(`${protectedPath}/`)
    })
}

function RoutesGuardian({children}) {
    const { user, setUser } = useContext(UserContext)
    const router = useRouter()
    const pathname = usePathname()

   useEffect(()=>{
        auth.onAuthStateChanged(async (currentUser) => {
            if(currentUser){
                try {
                    const idToken = await currentUser.getIdToken()
                    let uid
                    if(currentUser.uid){
                        uid = currentUser.uid
                    }else{
                        uid = currentUser.user.uid
                    }
                    const result = await getUser(uid)
                    setUser({
                        data: result,
                        logged: true,
                        token: idToken,
                    })

                    if(pathIsProtected(pathname) && !user.data.completed) {
                        router.push("/auth/completarPerfil")
                        return null
                    }
                } catch (error) {
                    console.error(error)
                }
            } else {
              if(pathIsProtected(pathname)) {
                router.push("/auth/login")
                return
              } 
            }
        })
    },[pathname])

    return (
        <>
            {children}
        </>
    )
}

export default RoutesGuardian
