import React, { useEffect, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import axios from 'axios'
import queryString from 'query-string'
import PosterList from '../Poster/PosterList'

function SearchPage() {
    const [filters , setFilters] = useState({
        language: 'vi',
        query: 'abcdefghijk', 
        page: 1,
    })
    const [movieList, setMovieList] = useState([])
    const [tvList, setTvList] = useState([])

    const handleFiltersChange = value => {
        console.log(value)
        if (value.searchTerm === '') value.searchTerm = 'abcdefghijk'
        setFilters({
            ...filters,
            query: value.searchTerm
        })
    }
    const fetchFunc = (url, callback) => {
        console.log(url);
        axios.get(url)
        .then(res => {
            const { results } = res.data
            console.log(res.data);
            callback(results)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        const paramsFilters = queryString.stringify(filters)
        const movieUrl = `${process.env.REACT_APP_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&${paramsFilters}`
        const tvUrl = `${process.env.REACT_APP_URL}/search/tv?api_key=${process.env.REACT_APP_API_KEY}&${paramsFilters}`
        
        fetchFunc(movieUrl, setMovieList)
        fetchFunc(tvUrl, setTvList)
    }, [filters])

    return (
        <div>
            <div className="main-section"> 
                <div className="section">
                        <SearchForm
                            onSubmit = {handleFiltersChange}
                        />
                        {movieList.length > 0 ? <PosterList type="movie" list = {movieList} title = "Phim lẻ" /> : ''}
                        {tvList.length > 0 ? <PosterList type="tv" list = {tvList} title = "Phim bộ" /> : ''}
                </div>
            </div>
        </div>
    )
}

export default SearchPage
