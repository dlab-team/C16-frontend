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

    const updateUserContext = (newUserData, idToken) => {
        setUser(prevUser => ({
            ...prevUser,
            data: newUserData,
            token:idToken
        }))
    }

    const deleteUser = () => {
        setUser({
            data: {},
            token: null,
            logged:false,
        })
    }

    useEffect(()=>{
        if(!user.logged){
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
                    } catch (error) {
                        console.error(error)
                    }
                }
            })
        }
    },[user])

    return (
        <UserContext.Provider
            value={{ user, updateUserContext, deleteUser }}>
            {children}
        </UserContext.Provider>
    )
}

