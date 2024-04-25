'use client'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RoutesGuardian from "@/components/RoutesGuardian/RoutesGuardian"
import { UserProvider } from "@/components/context/userContext"


function RootLayout({ children }) {
    return (
        <html lang="es">
                <UserProvider>
                    <RoutesGuardian>
                        {children}
                        <ToastContainer />
                    </RoutesGuardian>
                </UserProvider>
        </html>
    )
}

export default RootLayout