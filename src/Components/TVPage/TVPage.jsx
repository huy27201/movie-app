import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PosterList from '../Poster/PosterList'
import queryString from 'query-string'
import Pagination from '../Pagination/Pagination'

function TVPage() {
    const [tvList, setTvList] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [filters, setFilters] = useState({
        language: 'vi',
        page: 1,
        sort_by: 'popularity.desc',
        year: '',
        with_genres: ''
    })
    
    const fetchFunc = (url, callback, callback2) => {
        axios.get(url)
        .then(res => {
            const { results, total_pages } = res.data
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
        const paramsFilters = queryString.stringify(filters)
        const tvUrl = `${process.env.REACT_APP_URL}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&${paramsFilters}`

        fetchFunc(tvUrl, setTvList, setTotalPages)
    }, [filters])

    return (
        <div className="main-section">
            <div className="section">
                <h1 className="page-title">Phim bộ</h1>
                <PosterList list = { tvList } />
                <Pagination page = {filters.page} totalPages = {totalPages} onPageChange = {handlePageChange} />
            </div>
        </div>
    )
}

export default TVPage
