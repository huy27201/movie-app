import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import NotFound from '../NotFound/NotFound'
import { Link } from 'react-router-dom'
import { FaPlay, FaFacebookSquare, FaPlus } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import './DetailPage.scss'

function DetailPage() {
    const { type, id } = useParams()
    const [data, setData] = useState({})
    const [checkParams, setCheckParams] = useState(false)

    const fetchFunc = (type, id) => {
        const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi`
        axios.get(url)
        .then(res => {
            console.log(res.data);
            setData(res.data)
            setCheckParams(true)
        })
        .catch(err => {
            setCheckParams(false)
        })  
    }

    useEffect(() => {
        fetchFunc(type, id)

    }, [])

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
                                <div className="detail">
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
                                        <h1 className="detail-title">{data.original_title}</h1>
                                        <h2 className="detail-subtitle">{data.title}</h2>
                                        <p className="detail-time">
                                            {
                                                data.runtime >= 60 ? 
                                                    Math.floor(data.runtime / 60) + ' giờ ' + (data.runtime % 60) + ' phút'
                                                    : data.runtime + ' phút'
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
                                                <p className="detail-value">{data.release_date}</p>
                                            </div>
                                        </div>
                                        <p className="detail-overview">{data.overview}</p>
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
