import React, {} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'

function Cast(props) {
    const { list } = props
    const actors = list ? list.map(item => 
            <div key={item.id} className="detail-cast">
                <Link to={`/person/${item.id}`} className="detail-cast-img">
                    <img 
                        src={item.profile_path ? `https://image.tmdb.org/t/p/w138_and_h175_face/${item.profile_path}` 
                        : 'https://i.imgur.com/wLJJctg.png'} 
                        alt={item.name} 
                    />
                </Link>
                <Link to={`person/${item.id}`} className="detail-cast-name">{item.name}</Link>
                <p className="detail-cast-char">{item.character}</p>
            </div>) 
        : ''

    const sliderSetting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
    }    
    return (
        <>
            <h3 className="slider-title">Diễn viên</h3>
            <Slider {...sliderSetting} className="detail-casts">
                {actors}
            </Slider>
        </>
    )
}

export default Cast
