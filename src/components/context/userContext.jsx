'use client'

import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "@/services/firebaseConfig"
import { getUser } from "@/services/api/api.user.service"

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
            token: idToken
        }));
    }

    const deleteUser = () => {
        setUser({
            data: {},
            token: null,
            logged: false,
        });
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
                        logged: false,
                        token: idToken,
                    });

                } catch (error) {
                    console.error(error)
                }
            } else {
                deleteUser(); 
            }
        })
    }, [])

    return (
        <UserContext.Provider value={{ user, loading, updateUserContext, deleteUser}}>
            {children}
        {/* <UserContext.Provider value={{ user, loading, updateUserContext, deleteUser }}> */}
            {children}
        </UserContext.Provider>
    )
}
