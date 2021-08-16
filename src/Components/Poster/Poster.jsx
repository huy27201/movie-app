import React from 'react'
import './Poster.scss'

function Poster(props) {
    const { data } = props
    console.log(data);
    return (
        <div className="poster-item">
            <a href="#" className="poster-img">
                <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="" />
            </a>
            <div className="poster-content">
                <a href="#" className="poster-name">
                    {data.title ? data.title : data.name}
                </a>
                <a href="#" className="poster-origin-name">
                    {data.original_title ? data.original_title : data.original_name}
                </a>
            </div>
        </div>
    )
}

export default Poster
