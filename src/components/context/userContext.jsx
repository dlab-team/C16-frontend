'use client'

import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "@/services/firebaseConfig"
import { getUser } from "@/services/api/api.user.service"

export const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)

export function UserProvider({ children }) {

    const [showModalButton, setShowModalButton] = useState(true);

    const [user, setUser] = useState({
        data: {},
        logged: false,
        token: null,
    })

    const [loading, setLoading] = useState(true)

    const [logged, setLogged] = useState(false); // Nuevo estado

    const updateUserContext = (newUserData, idToken) => {
        setUser(prevUser => ({
            ...prevUser,
            data: newUserData,
            token: idToken
        }));

        setLogged(true); // Actualiza el estado logged
    }

    const deleteUser = () => {
        setUser({
            data: {},
            token: null,
            logged: false,
        });

        setLogged(false); // Actualiza el estado logged
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                try {
                    const idToken = await currentUser.getIdToken()
                    const uid = currentUser.uid ? currentUser.uid : currentUser.user.uid;
                    const result = await getUser(uid);

                    // setUser({
                    //     data: result,
                    //     logged: false,
                    //     token: idToken,
                    // });

                    updateUserContext(result, idToken); // Actualiza el contexto con los datos del usuario

                } catch (error) {
                    console.error(error)
                }
            } else {
                deleteUser(); 
            }
            setLoading(false)  // Actualiza el estado de carga una vez completadas las operaciones
        })
    }, [])

    return (
        <UserContext.Provider value={{ user, loading, updateUserContext, deleteUser, logged, setLogged }}>
            {children}
        {/* <UserContext.Provider value={{ user, loading, updateUserContext, deleteUser }}> */}
            {children}
        </UserContext.Provider>
    )
}
