'use client'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { useRouter, usePathname } from 'next/navigation'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const protectedRoutes = [
    '/academia',
    '/foro/*',
    '/perfil',
];

const pathIsProtected = (pathname) => {
    return protectedRoutes.some(protectedPath => {
        if (protectedPath.endsWith('/*')) {
            const baseRoute = protectedPath.slice(0, -2)
            return pathname.startsWith(baseRoute)
        }
        return pathname === protectedPath || pathname.startsWith(`${protectedPath}/`)
    });
};

function RoutesGuardian({ children }) {
    const { user, loading } = useContext(UserContext)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!loading) {  // Solo ejecuta las comprobaciones una vez que la carga del usuario haya terminado
            if (pathIsProtected(pathname)) {
                if (!user.logged) {
                    router.push("/auth/login")
                } else if (!user.data.completed) {
                    router.push("/auth/completarPerfil")
                }
            }
        }
    }, [loading, user.logged, user.data.completed, pathname])  // Dependencias actualizadas para reaccionar a cambios

    if (loading) return <LoadingSpinner />  // Mostrar un indicador de carga mientras se verifica el usuario

    return (
        <>
            {children}
        </>
    )
}

export default RoutesGuardian