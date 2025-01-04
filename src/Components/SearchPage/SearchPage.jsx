import React, { useEffect, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import axios from 'axios'
import Loading from '../Loading/Loading'
import queryString from 'query-string'
import PosterList from '../Poster/PosterList'
import FadeIn from 'react-fade-in'

function SearchPage() {
    const [filters , setFilters] = useState({
        language: 'vi',
        query: 'abcdefghijk', 
        page: 1,
    })
    const [movieList, setMovieList] = useState([])
    const [tvList, setTvList] = useState([])
    const [loading, setLoading] = useState(false)

    const handleFiltersChange = value => {
        if (value.searchTerm === '') value.searchTerm = 'abcdefghijk'
        setFilters({
            ...filters,
            query: value.searchTerm
        })
    }
    //Hàm get api
    const fetchFunc = paramsFilters => {
        setLoading(true)
        const movieUrl = `${process.env.REACT_APP_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&${paramsFilters}`
        const tvUrl = `${process.env.REACT_APP_URL}/search/tv?api_key=${process.env.REACT_APP_API_KEY}&${paramsFilters}`

        const movieListAxios = axios.get(movieUrl)
        const tvListAxios = axios.get(tvUrl)

        axios.all([movieListAxios, tvListAxios])
        .then(
            axios.spread((...res) => {
                setMovieList(res[0].data.results)
                setTvList(res[1].data.results)
                setLoading(false)
            })
        )
        .catch(err => {
            setLoading(false)
        })
    }

    useEffect(() => {
        const paramsFilters = queryString.stringify(filters)
        fetchFunc(paramsFilters)
    }, [filters])

    return (
        <div>
            <div className="main-section"> 
                <div className="section">
                        <SearchForm onSubmit = {handleFiltersChange} />
                        {
                            loading ? <Loading /> : 
                            <FadeIn>
                                {movieList.length > 0 ? <PosterList type="movie" list = {movieList} title = "Phim lẻ" /> : ''}
                                {tvList.length > 0 ? <PosterList type="tv" list = {tvList} title = "Phim bộ" /> : ''}
                            </FadeIn>
                        }
                </div>
            </div>
        </div>
    )
}

export default SearchPage
