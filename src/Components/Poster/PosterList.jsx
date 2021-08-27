import React from 'react'
import Poster from './Poster'
import './Poster.scss'

function PosterList(props) {
    const title = props.title ? <h2 className="poster-title">{props.title}</h2> : ''
    const limit = props.limit ? props.limit : 999
    const { list, type } = props
    const posts = list ? list.map((item, index) => index < limit ? <Poster type={type} key={item.id} data={item} /> : '') : ''
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
