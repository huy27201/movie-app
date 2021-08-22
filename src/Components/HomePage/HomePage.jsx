import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PosterList from '../Poster/PosterList'

function HomePage() {
    const [reccomendList, setReccomendList] = useState([])
    const [movieList, setMovieList] = useState([])
    const [tvList, setTvList] = useState([])
    
    const fetchFunc = (url, callback) => {
        axios.get(url)
        .then(res => {
            const { results } = res.data
            callback(results)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        const reccomendUrl = 'https://api.themoviedb.org/3/trending/all/week?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi'
        const movieUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi'
        const tvUrl = 'https://api.themoviedb.org/3/trending/tv/day?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi'
        
        fetchFunc(reccomendUrl, setReccomendList)
        fetchFunc(movieUrl, setMovieList)
        fetchFunc(tvUrl, setTvList)
    }, [])

    return (
        <div className="main-section">
            <div className="section">
                <PosterList 
                    list = {reccomendList} 
                    title = "Phim đề cử" 
                    limit= {5}
                />
                <PosterList 
                    list = {movieList} 
                    title = "Phim lẻ mới cập nhật" 
                    limit = {10}
                />
                <PosterList 
                    list = {tvList} 
                    title = "Phim bộ mới cập nhật" 
                    limit={10}
                />
            </div>
        </div>
    )
}

export default HomePage
