import React from 'react'
import ReactPlayer from 'react-player'
import { FaTimes } from 'react-icons/fa'

function TrailerDetail(props) {
    const { trailerKey, handleClick } = props
    console.log(trailerKey);
    if (!trailerKey || trailerKey === '') return <div></div>
    return (
        <div className="trailer-popup">
            <button className='trailer-exit' onClick={() => handleClick('')}>
                <FaTimes className='trailer-exit-btn'/>
            </button>
            <ReactPlayer 
                controls
                playing
                width='1000px'
                height='562px'
                url={`https://youtu.be/${trailerKey}`}
            />
        </div>
    )
}

export default TrailerDetail
