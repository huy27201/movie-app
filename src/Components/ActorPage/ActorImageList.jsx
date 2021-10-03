import React from 'react'

function ActorImageList(props) {
    const { list } = props
    const posts = list ? list.map((item, index) =>  
        <div className="profile-image" key={index}>
            <div className="profile-image-container">
                <img 
                    src={`https://image.tmdb.org/t/p/w300${item.file_path}`} 
                    alt="Profile" 
                />
            </div>
        </div> ) 
        : ''
    return ( 
        <div className="profile-images">
            {posts}
        </div>
    )
}

export default ActorImageList
