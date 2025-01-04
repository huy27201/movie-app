import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PosterList from '../Poster/PosterList'
import queryString from 'query-string'
import PagePagination from '../Pagination/Pagination'
import Loading from '../Loading/Loading'
import FadeIn from 'react-fade-in'

function TVPage() {
    const [loading, setLoading] = useState(true)
    const [tvList, setTvList] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [filters, setFilters] = useState({
        language: 'vi',
        page: 1,
        sort_by: 'popularity.desc',
    })
    
    //Hàm get api
    const fetchFunc = paramsFilters => {
        const url = `${process.env.REACT_APP_URL}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&${paramsFilters}`
        axios.get(url)
        .then(res => {
            const { results, total_pages } = res.data
            
            setTvList(results)
            setTotalPages(total_pages <= 100 ? totalPages : 100)
            setLoading(false)
        })
        .catch(err => {
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
                        <h1 className="page-title">Phim bộ</h1>
                        {
                            loading ? <Loading /> : 
                                <FadeIn>
                                    <PosterList list = {tvList} limit = {totalPages}/>
                                </FadeIn>
                        }
                        <PagePagination 
                            totalPages = {totalPages} 
                            onPageChange = {handlePageChange} 
                        />
                </div>
            </div>
        </FadeIn>
    )
}

export default TVPage