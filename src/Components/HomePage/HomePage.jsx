import React, { useEffect, useState, lazy, Suspense } from 'react'
import axios from 'axios'
import PosterList from '../Poster/PosterList'
import queryString from 'query-string'

const query = {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'vi'
}

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
        const paramsFilters = queryString.stringify(query)
        const reccomendUrl = `${process.env.REACT_APP_URL}/trending/all/week?${paramsFilters}`
        const movieUrl = `${process.env.REACT_APP_URL}/trending/movie/day?${paramsFilters}`
        const tvUrl = `${process.env.REACT_APP_URL}/trending/tv/day?${paramsFilters}`
        
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
