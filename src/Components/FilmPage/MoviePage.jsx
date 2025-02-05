import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PosterList from '../Poster/PosterList'
import PagePagination from '../Pagination/Pagination'
import Filters from '../Filters/Filters'
import queryString from 'query-string'
import Loading from '../Loading/Loading'
import FadeIn from 'react-fade-in'

function MoviePage() {
    const [loading, setLoading] = useState(true)
    const [movieList, setMovieList] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [filters, setFilters] = useState({
        language: 'vi',
        page: 1,
        sort_by: 'popularity.desc',
        year: '',
        with_genres: '',
        with_original_language: '',
    })

    const handleSort = value => {
        setFilters({
            ...filters, 
            sort_by: value,
            page: 1
        })
    }
    const handleLanguage = value => {
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
    const fetchFunc = paramsFilters => {
        const url = `${process.env.REACT_APP_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&${paramsFilters}`
        axios.get(url)
        .then(res => {
            const { results, total_pages } = res.data
            setMovieList(results)
            setTotalPages(total_pages <= 100 ? totalPages : 100)
            setLoading(false)
        })
        .catch(() => {
            setLoading(false)
        })
    }
    const handlePageChange = newPage => {
        setLoading(true)
        setFilters({
            ...filters,
            page: newPage
        })
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
        const paramsFilters = queryString.stringify(filters)
        fetchFunc(paramsFilters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters])

    return (
        <FadeIn>
            <div className="main-section">
                <div className="section">
                        <h1 className="page-title">Phim lẻ</h1>
                        <Filters 
                            type = "movie"
                            handleSort = {handleSort} 
                            handleLanguage = {handleLanguage} 
                            handleGenre = {handleGenre}
                            handleYear = {handleYear}
                        />
                        {
                            loading ? <Loading /> :
                            <FadeIn>
                                <PosterList 
                                    list = {movieList} 
                                    limit = {totalPages}
                                />
                            </FadeIn>
                        }
                        {movieList.length !== 0 ? 
                            <PagePagination totalPages = {totalPages} onPageChange = {handlePageChange} /> :
                            <div className="notfound">Không thấy phim bạn muốn xem?</div>}       
                </div>
            </div>
        </FadeIn>
    )
}

export default MoviePage