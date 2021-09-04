import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PosterList from '../Poster/PosterList'
import queryString from 'query-string'
import Loading from '../Loading/Loading'
import FadeIn from 'react-fade-in'

const query = {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'vi'
}

function HomePage() {
    const [reccomendList, setReccomendList] = useState([])
    const [movieList, setMovieList] = useState([])
    const [tvList, setTvList] = useState([])
    const [loading, setLoading] = useState(false)
    
    const fetchFunc = (url, callback) => {
        axios.get(url)
        .then(res => {  
            const { results } = res.data
            callback(results)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        setLoading(true)
        const loadingTime = setTimeout(()=> {
            setLoading(false)
        }, 1500)
        const paramsFilters = queryString.stringify(query)
        const reccomendUrl = `${process.env.REACT_APP_URL}/trending/all/week?${paramsFilters}`
        const movieUrl = `${process.env.REACT_APP_URL}/trending/movie/day?${paramsFilters}`
        const tvUrl = `${process.env.REACT_APP_URL}/trending/tv/day?${paramsFilters}`
        
        fetchFunc(reccomendUrl, setReccomendList)
        fetchFunc(movieUrl, setMovieList)
        fetchFunc(tvUrl, setTvList)
        
        return (() => {
            clearTimeout(loadingTime)
        })
    }, [])

    return (
        <>
            {   
                loading ? <Loading /> :
                <div className="main-section">
                    <div className="section">
                        <FadeIn>
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
                        </FadeIn>
                    </div>
                </div>
            }
        </>
    )
}

export default HomePage
