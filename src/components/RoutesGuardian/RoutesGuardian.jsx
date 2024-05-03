'use client'

import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { useRouter, usePathname } from 'next/navigation'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const protectedRoutes = [
    '/perfil',
    '/academia',
    '/foro',
]

function isProtectedRoute(pathname) {
    const regex = new RegExp(`^(${protectedRoutes.join('|')})($|/|\\?)`);
    return regex.test(pathname)
}

function RoutesGuardian({ children }) {
    const { user, loading } = useContext(UserContext)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!loading) {  // Solo ejecuta las comprobaciones una vez que la carga del usuario haya terminado
            if (isProtectedRoute(pathname)) {
                if (!user.logged) {
                    router.push("/auth/login")
                } else if (!user.data.completed) {
                    router.push("/auth/completarPerfil")
                }
            }
        }
    }, [loading, user.logged, user.data.completed, pathname])  // Dependencias actualizadas para reaccionar a cambios


    if (loading) return  ( <LoadingSpinner /> )

    return (
        <>
            {children}
        </>
    )
}

export default RoutesGuardian