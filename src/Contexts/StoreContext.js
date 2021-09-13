import React, { useContext, useState } from 'react'
import { setDoc, doc, getDocs, collection, deleteDoc, getDoc } from 'firebase/firestore'
import { firestore } from '../Firebase/config'
import { useAuth } from './AuthContext'

const StoreContext = React.createContext()

export function useStore() {
    return useContext(StoreContext)
}

export function StoreProvider({ children }) {
    const { currentUser } = useAuth()
    const [filmCollection, setFilmCollection] = useState([])

    const addFilm = (data, type) => {
        const film = {
            id: data.id,    
            title: data.title ? data.title : data.name,
            original_title: data.original_title ? data.original_title : data.original_name,
            media_type: type,
            poster_path: data.poster_path
        }

        const userFilmDoc = doc(firestore, `users/${currentUser.uid}/films`, data.id.toString())
        return setDoc(userFilmDoc, film)
    }
    const removeFilm = id => {
        const userFilmDoc = doc(firestore, `users/${currentUser.uid}/films`, id.toString())
        return deleteDoc(userFilmDoc)
    }
    const getFilms = () => {
        const list = []
        if(currentUser) {
            const col = collection(firestore, `users/${currentUser.uid}/films`)
            return getDocs(col)
            .then(querySnapshot => {
                querySnapshot.forEach(doc => list.push(doc.data()))
            })
            .then(() => {
                setFilmCollection(list)
            })
        }
    }
    const getFilmById = id => {
        if (currentUser) {
            const userFilmDoc = doc(firestore, `users/${currentUser.uid}/films`, id.toString())
            return getDoc(userFilmDoc)
        }
        return Promise.reject(new Error())
    }
    const resetCollection = () => {
        setFilmCollection([])
    }

    const value = {
        filmCollection,
        resetCollection,
        addFilm, 
        getFilms,
        getFilmById,
        removeFilm
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}
