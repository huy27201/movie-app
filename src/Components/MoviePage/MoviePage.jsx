import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PosterList from '../Poster/PosterList'
import Pagination from '../Pagination/Pagination'
import Filters from '../Filters/Filters'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import FadeIn from 'react-fade-in'

function MoviePage() {
    const [loading, setLoading] = useState(false)
    const [movieList, setMovieList] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [filters, setFilters] = useState({
        language: 'vi',
        page: 1,
        sort_by: 'popularity.desc',
        year: '',
        with_genres: '',
        with_original_language: ''
    })

    const handleSort = value => {
        setFilters({
            ...filters, 
            sort_by: value,
            page: 1
        })
    }
    const handleCountry = value => {
        setFilters({
            ...filters, 
            with_original_language: value,
            page: 1
        })
    }
    const handleYear = value => {
        setFilters({
            ...filters, 
            year: value,
            page: 1
        })
    }
    const handleGenre = value => {
        setFilters({
            ...filters, 
            with_genres: value,
            page: 1
        })
    }
    
    const fetchFunc = (url, callback, callback2) => {
        axios.get(url)
        .then(res => {
            const { results, total_pages } = res.data
            console.log(res.data);
            callback(results)
            callback2(total_pages)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handlePageChange = newPage => {
        console.log("object");
        setFilters({
            ...filters,
            page: newPage
        })
    }

    useEffect(() => {
        setLoading(true)
        const loadingTime = setTimeout(() => {
            setLoading(false)
        }, 2000)
        
        return() => {
            clearTimeout(loadingTime)
        }
    }, [])
    
    useEffect(() => {
        const paramsFilters = queryString.stringify(filters);
        const movieUrl = `${process.env.REACT_APP_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&${paramsFilters}`

        fetchFunc(movieUrl, setMovieList, setTotalPages) 
    }, [filters])

    return (
        <>
            { 
                loading ? <Loading /> :
                <FadeIn>
                    <div className="main-section">
                        <div className="section">
                                <h1 className="page-title">Phim lẻ</h1>
                                <Filters 
                                    handleSort = {handleSort} 
                                    handleCountry = {handleCountry} 
                                    handleGenre = {handleGenre}
                                    handleYear = {handleYear}
                                />
                                <PosterList list = {movieList} />
                                <Pagination page = {filters.page} totalPages = {totalPages} onPageChange = {handlePageChange} />           
                                {movieList.length === 0 ? <div className="notfound">Không thấy phim bạn muốn xem? Hãy thử <Link to="#" className="link">yêu cầu phim</Link>!</div> : ''}
                        </div>
                    </div>
                </FadeIn>
            }
        </>
    )
}

export default MoviePage