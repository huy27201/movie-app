import React from 'react'
import './Poster.scss'
import { Link, useLocation }  from 'react-router-dom'

function Poster(props) {
    const location = useLocation()
    const { data } = props
    const image = data.poster_path ? <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="Poster" /> : ''
    const type  = data.media_type ? data.media_type : props.type ? props.type : location.pathname.substr(1)
    const filmPath = `/${type}/${data.id}`

    return (
        <div className="poster-item">
            <Link to={filmPath} className="poster-img">
                {image}
            </Link>
            <div className="poster-content">
                <Link to={filmPath} className="poster-name">
                    {data.title || data.name}
                </Link>
                <Link to={filmPath} className="poster-origin-name">
                    {data.original_title || data.original_name}
                </Link>
            </div>
        </div>
    )
}

export default Poster
