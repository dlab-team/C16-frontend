'use client'

import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'
import { useRouter, usePathname } from 'next/navigation'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const protectedRoutes = [
    '/perfil',
    '/academia',
    '/foro',
    '/dashboard',
]

function isProtectedRoute(pathname) {
    const regex = new RegExp(`^(${protectedRoutes.join('|')})($|/|\\?)`);
    return regex.test(pathname)
}
const isDashboard = (pathname) => {
    const dashboardRegex = /^\/dashboard($|\/|\\?)/;
    return dashboardRegex.test(pathname);
}

function RoutesGuardian({ children }) {
    const { user, loading } = useContext(UserContext)
    const [aux, setAux] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!loading) {  // Solo ejecuta las comprobaciones una vez que la carga del usuario haya terminado
            if (isProtectedRoute(pathname)) {
                if (!user.logged) {
                    router.push("/auth/login")
                } else if (!user.data.completed) {
                    router.push("/auth/completarPerfil")
                }else if(user.data.roleId==3 && isDashboard(pathname)){//solo debe ser role 3 y estar en la ruta dashboard
                    router.push("/")
                }
            }
        }
    }, [loading, user.logged, user.data.completed, aux, pathname])  // Dependencias actualizadas para reaccionar a cambios

    useEffect(()=>{
        if(isProtectedRoute(pathname)){
            setAux(true)
        }else{
            setAux(false)
        }
    })

    if (loading) return  ( <LoadingSpinner /> )

    return (
        <>
            {children}
        </>
    )
}

export default RoutesGuardian