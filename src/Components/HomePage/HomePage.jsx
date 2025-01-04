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
    const [recommendList, setRecommendList] = useState([])
    const [movieList, setMovieList] = useState([])
    const [tvList, setTvList] = useState([])
    const [loading, setLoading] = useState(true)
    
    window.scrollTo(0, 0)
    //Hàm get api
    const fetchFunc = () => {
        const paramsFilters = queryString.stringify(query)
        const recommendUrl = `${process.env.REACT_APP_URL}/trending/all/week?${paramsFilters}`
        const movieUrl = `${process.env.REACT_APP_URL}/trending/movie/day?${paramsFilters}`
        const tvUrl = `${process.env.REACT_APP_URL}/trending/tv/day?${paramsFilters}`

        const recomendListAxios = axios.get(recommendUrl)
        const movieListAxios = axios.get(movieUrl)
        const tvListAxios = axios.get(tvUrl)

        axios.all([recomendListAxios, movieListAxios, tvListAxios])
        .then(
            axios.spread((...res) => {
                setRecommendList(res[0].data.results)
                setMovieList(res[1].data.results)
                setTvList(res[2].data.results)
                setLoading(false)
            })
        )
        .catch(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchFunc()
    }, [])

    return (
        <>
            {   
                loading ? <Loading /> :
                <FadeIn>
                    <div className="main-section">
                        <div className="section">
                                <PosterList 
                                    list = {recommendList} 
                                    title = "Phim đề cử" 
                                    limit = {5}     //Giới hạn poster được render là 5
                                />
                                <PosterList 
                                    list = {movieList} 
                                    title = "Phim lẻ mới cập nhật" 
                                    limit = {10}    //Giới hạn poster được render là 10
                                />
                                <PosterList 
                                    list = {tvList} 
                                    title = "Phim bộ mới cập nhật" 
                                    limit = {10}    //Giới hạn poster được render là 10
                                />
                        </div>
                    </div>
                </FadeIn>
            }
        </>
    )
}

export default HomePage