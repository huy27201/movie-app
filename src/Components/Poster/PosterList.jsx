import React from 'react'
import Poster from './Poster'
import './Poster.scss'

function PosterList(props) {
    const title = typeof props.title !== 'undefined' ? <h2 className="poster-title">{props.title}</h2> : ''
    console.log(props.title)
    const { results } = props.list
    const posts =  results ? results.map(item => <Poster key={item.id} data={item} />) : ''
    return ( 
        <>
            {title}
            <div className="poster-list">
                {posts}
            </div>
        </>
    )
}

export default React.memo(PosterList)
