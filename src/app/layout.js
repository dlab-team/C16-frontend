'use client'

import RoutesGuardian from "@/components/RoutesGuardian/RoutesGuardian"
import { UserProvider } from "@/components/context/userContext"

function RootLayout({ children }) {
    return (
        <html lang="es">
            <UserProvider>
                <RoutesGuardian>
                    {children}
                </RoutesGuardian>
            </UserProvider>
        </html>
    )
}

export default RootLayout