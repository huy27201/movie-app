import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PosterList from '../Poster/PosterList'

function HomePage() {
    const [movieList, setMovieList] = useState({})
    const [tvList, setTvList] = useState({})
    
    const fetchFunc = (url, callback) => {
        axios.get(url)
        .then(res => {
            console.log(res.data);
            callback(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        const movieUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi'
        const tvUrl = 'https://api.themoviedb.org/3/trending/tv/day?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi'
        
        fetchFunc(movieUrl, setMovieList)
        fetchFunc(tvUrl, setTvList)
    }, [])

    return (
        <div className="container">
            <div className="section">
                <PosterList list={movieList} title="Phim lẻ mới cập nhật"/>
                <PosterList list={tvList} title="Phim bộ mới cập nhật"/>
            </div>
        </div>
    )
}

export default HomePage
