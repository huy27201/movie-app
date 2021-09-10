import React, { useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../Firebase/config'

const AuthContext = React.createContext()
const googleProvider = new GoogleAuthProvider()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState('')
    const [loading, setLoading] = useState(true)

    const signup = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            updateName(name)
        })
        .then(() => {
            setCurrentUser(prevState => {
                return {
                    ...prevState,
                    displayName: name
                }
            })
        })
    } 

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const logout = () => {
        return signOut(auth)
    } 

    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email)
    }

    const updateName = name => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
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
        signup, 
        logout,
        resetPassword, 
        googleLogin
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
