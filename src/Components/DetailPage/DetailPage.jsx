import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import NotFound from '../NotFound/NotFound'
import Cast from './Cast'
import Trailer from './Trailer'
import { Link } from 'react-router-dom'
import { FaPlay, FaFacebookSquare, FaPlus } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import './DetailPage.scss'


function DetailPage() {
    const { type, id } = useParams()
    const [data, setData] = useState({})
    const [credits, setCredits] = useState({})
    const [trailers, setTrailers] = useState({})
    const [checkParams, setCheckParams] = useState(false)

    const fetchFunc = (url, callback) => {
        axios.get(url)
        .then(res => {
            console.log(res.data);
            callback(res.data)
        })
        .catch(err => {
            console.log(err)
        })  
    }
    useEffect(() => {
        const filmUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi`
        axios.get(filmUrl)
        .then(res => {
            console.log(res.data);
            setData(res.data)
            setCheckParams(true)
        })
        .catch(err => {
            setCheckParams(false)
        })  
    }, [])

    useEffect (() => {
        if (checkParams) {
            const creditUrl = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi`
            fetchFunc(creditUrl, setCredits)

            const trailerUrl = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=93575fc50e306d7f610ab205e9f80ee4&language=en`
            fetchFunc(trailerUrl, setTrailers)
        }
    }, [checkParams])

    return (
        <>
            {
                checkParams ? 
                    <>
                        <div 
                            className="background" 
                            style = {{backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`}} 
                        />
                        <div className="main-section">
                            <div className="section">
                                <div className="detail margin-neg">
                                    <div className="detail-item detail-card">
                                        <div className="detail-poster">
                                            <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="Poster" />
                                        </div>
                                        <IconContext.Provider value={{color: '#fff', size: '1.25rem'}}>
                                            <Link to="/" className="detail-watch">
                                                <FaPlay />
                                                <span>Xem phim</span>
                                            </Link>
                                        </IconContext.Provider>
                                    </div>
                                    <div className="detail-item detail-info">
                                        <h1 className="detail-title">{data.original_title || data.original_name}</h1>
                                        <h2 className="detail-subtitle">{data.title || data.name}</h2>
                                        <p className="detail-time">
                                            {
                                                (data.runtime ? (data.runtime >= 60 ? 
                                                    Math.floor(data.runtime / 60) + ' giờ ' + (data.runtime % 60) + ' phút'
                                                    : data.runtime + ' phút') : ('Phim bộ'))
                                            }
                                        </p>
                                        <div className="detail-rate">Đánh giá: {data.vote_average}</div>
                                        <div className="detail-links">
                                            <IconContext.Provider value={{color: '#fff', size: '1.25rem'}}>
                                                <div className="detail-btns">
                                                    <Link to="/" className="detail-btn detail-share">
                                                        <FaFacebookSquare />
                                                        <span>Chia sẻ</span>
                                                    </Link>
                                                    <Link to="/" className="detail-btn detail-alb">
                                                        <FaPlus />
                                                        <span>Bộ sưu tập</span>
                                                    </Link>
                                                </div>
                                            </IconContext.Provider>
                                            <div className="detail-genres">
                                                {
                                                    data.genres.map(item => 
                                                        <div 
                                                            key={item.id} 
                                                            className="detail-genre">
                                                            {item.name.substr(item.name.indexOf(' ') + 1)}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="detail-list">
                                            <div className="detail-li">
                                                <p className="detail-key">Công ty</p>
                                                <p className="detail-value">
                                                    {
                                                        data.production_companies.map(
                                                            (item, index) => item.name + (index < data.production_companies.length - 1 ? ", " : '')
                                                        )
                                                    }
                                                </p>
                                            </div>
                                            <div className="detail-li">
                                                <p className="detail-key">Quốc gia</p>
                                                <p className="detail-value">
                                                    {
                                                        data.production_countries.map(
                                                            (item, index) => item.name + (index < data.production_countries.length - 1 ? ", " : '')
                                                        )
                                                    }
                                                </p>
                                            </div>
                                            <div className="detail-li">
                                                <p className="detail-key">Khởi chiếu</p>
                                                <p className="detail-value">{data.release_date || data.first_air_date}</p>
                                            </div>
                                        </div>
                                        <p className="detail-overview">{data.overview}</p>
                                        <Cast list={credits.cast}/>
                                        <Trailer list={trailers.results}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : <NotFound />
            }
        </>
    )
}

export default DetailPage
