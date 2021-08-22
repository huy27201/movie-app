import React from 'react'
import Poster from './Poster'
import './Poster.scss'

function PosterList(props) {
    const title = props.title ? <h2 className="poster-title">{props.title}</h2> : ''
    const limit = props.limit ? props.limit : 999
    const { list } = props
    console.log(list);
    const posts = list ? list.map((item, index) => index < limit ? <Poster key={item.id} data={item} /> : '') : ''
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
