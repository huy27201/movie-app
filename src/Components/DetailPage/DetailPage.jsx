import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import NotFound from '../NotFound/NotFound'
import Cast from './Cast'
import Trailer from './Trailer'
import TrailerDetail from './TrailerDetail'
import { Link, useHistory } from 'react-router-dom'
import { FaPlay, FaFacebookSquare, FaPlus, FaEye } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Loading from '../Loading/Loading'
import { useStore } from '../../Contexts/StoreContext'
import { useAuth } from '../../Contexts/AuthContext'
import './DetailPage.scss'
import { toast } from 'react-toastify'

toast.configure()

function DetailPage() {
    const { addFilm, removeFilm, getFilmById } = useStore()
    const { currentUser } = useAuth()
    const { type, id } = useParams()

    const [data, setData] = useState({})
    const [credits, setCredits] = useState({})
    const [trailers, setTrailers] = useState({})
    const [trailerKey, setTrailerKey] = useState('')
    const [btnWatch, setBtnWatch] = useState(false)
    const [loading, setLoading] = useState(false)
    const [checkParams, setCheckParams] = useState(false)

    const history = useHistory()
    const btnClass = ['detail-btn']

    currentUser && btnWatch ? btnClass.push('detail-watched') : btnClass.push('detail-alb')

    const handleTrailer = key => {
        console.log(key)
        setTrailerKey(key)
    }
    const handleCollection = async () => {
        if (currentUser) {
            if (!btnWatch) {
                try {
                    await addFilm(data, type)
                    setBtnWatch(!btnWatch)
                    toast.success('Thêm vào bộ sưu tập thành công.')
                }
                catch(err) {
                    toast.error('Thêm vào bộ sưu tập thất bại. Vui lòng thử lại sau.')
                }
            }
            else {
                try {
                    await removeFilm(data.id)
                    setBtnWatch(!btnWatch)
                    toast.success('Xoá khỏi bộ sưu tập thành công.')
                }
                catch(err) {
                    toast.error('Xóa khỏi bộ sưu tập thất bại. Vui lòng thử lại sau.')
                }
            }
        } 
        else history.push('/login')
    }
    const fetchFunc = (url, callback) => {
        axios.get(url)
        .then(res => {
            console.log(res.data)
            callback(res.data)
        })
        .catch(err => {
            console.log(err)
        })  
    }
    const getFilm = async () => {
        try {
            await getFilmById(id)
            .then(res => {
                res.exists() ? setBtnWatch(true) : setBtnWatch(false)
            })
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        setLoading(true)
        const loadingTime = setTimeout(()=> {
            setLoading(false)
        }, 2000)
        const filmUrl = `${process.env.REACT_APP_URL}/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=vi`
        axios.get(filmUrl)
        .then(res => {
            console.log(data)
            setData(res.data)
            setCheckParams(true)
        })
        .catch(err => {
            setCheckParams(false)
        }) 
        
        getFilm()

        return () => {
            clearTimeout(loadingTime)
        }
    }, [])

    useEffect (() => {
        if (checkParams) {
            const creditUrl = `${process.env.REACT_APP_URL}/${type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=vi`
            fetchFunc(creditUrl, setCredits)

            const trailerUrl = `${process.env.REACT_APP_URL}/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en`
            fetchFunc(trailerUrl, setTrailers)
        }
    }, [checkParams])

    return (
        <>
            {
                loading ? <Loading /> : 
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
                                            <img 
                                                src={data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
                                                    : 'https://i.imgur.com/wLJJctg.png'} 
                                                alt="Poster" 
                                            />
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
                                                    <button className="detail-btn detail-share">
                                                        <FaFacebookSquare />
                                                        <span>Chia sẻ</span>
                                                    </button>
                                                    <button className={btnClass.join(' ')} onClick={handleCollection}>
                                                        { 
                                                            (currentUser && btnWatch) ? 
                                                            <>
                                                                <FaEye />
                                                                <span>Xóa khỏi bộ sưu tập</span>
                                                            </> :
                                                            <>
                                                                <FaPlus />
                                                                <span>Bộ sưu tập</span>
                                                            </> 
                                                        }
                                                    </button>
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
                                                            (item, index) => item.name + (index < data.production_companies.length - 1 ? ', ' : '')
                                                        )
                                                    }
                                                </p>
                                            </div>
                                            <div className="detail-li">
                                                <p className="detail-key">Quốc gia</p>
                                                <p className="detail-value">
                                                    {
                                                        data.production_countries.map(
                                                            (item, index) => item.name + (index < data.production_countries.length - 1 ? ', ' : '')
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
                                        <Cast 
                                            list={credits.cast}
                                        />
                                        <Trailer 
                                            list={trailers.results} 
                                            handleClick={handleTrailer}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TrailerDetail 
                            trailerKey={trailerKey}
                            handleClick={handleTrailer}
                        />
                    </>
                    : <NotFound />
            }
        </>
    )
}

export default DetailPage
