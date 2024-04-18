'use client'

import { createContext, useContext, useState } from "react"

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

    return (
        <UserContext.Provider
            value={{ user, setUser, updateUserContext, deleteUser }}>
            {children}
        </UserContext.Provider>
    )
}

