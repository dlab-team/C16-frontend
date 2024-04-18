'use client'
import {useContext} from 'react'
import { UserContext } from '../context/userContext'
import { useRouter, usePathname } from 'next/navigation'

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
    const { user } = useContext(UserContext)
    const router = useRouter()
    const pathname = usePathname()

    if(pathIsProtected(pathname)){
        if(!user.logged){
            router.push("/auth/login")
            return null
            
        }else if(!user.data.completed){
            console.log(user.data)
            router.push("/auth/completarPerfil")
            return null
        }
    }

    return (
        <>
            {children}
        </>
    )
}

export default RoutesGuardian
