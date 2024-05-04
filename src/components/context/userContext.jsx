'use client'

import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "@/services/firebaseConfig"
import { getUser } from "@/services/api/api.user.service"
import { logOut } from "@/services/user.fire.service"

export const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        data: {},
        logged: false,
        token: null,
    })
    
    const [loading, setLoading] = useState(true)

    const updateUserContext = (newUserData, idToken) => {
        setUser(prevUser => ({
            ...prevUser,
            data: newUserData,
            token: idToken,
        }))
    }

    // actualiza el token con uno válido
    const updateToken = async()=>{
        try {
            const currentUser = auth.currentUser;
            if(!currentUser){ // si no hay un currentUser es porque se ha desloggeado o ha sido eliminado
                deleteUser()
                return false
            }
            const idToken = await currentUser.getIdToken(true);
            updateUserContext(user.data, idToken)
        } catch (error) {
            deleteUser()
            return false
        }
        return true
    }

    const deleteUser = async () => {
        await logOut()
        setUser({
            data: {},
            token: null,
            logged: false,
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                try {
                    const idToken = await currentUser.getIdToken()
                    const uid = currentUser.uid ? currentUser.uid : currentUser.user.uid;
                    const result = await getUser(uid);
                    setUser({
                        data: result,
                        logged: true,
                        token: idToken,
                    });
                } catch (error) {
                    console.error(error)
                }
            }
            setLoading(false)  // Actualiza el estado de carga una vez completadas las operaciones
        })
    }, [])

    return (
        <UserContext.Provider value={{ user, loading, updateUserContext, deleteUser, updateToken }}>
            {children}
        </UserContext.Provider>
    )
}