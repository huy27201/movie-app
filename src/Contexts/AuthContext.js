import React, { useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/config'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState('')
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    } 

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
        setCurrentUser(user)
        setLoading(false)
    })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,  
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
