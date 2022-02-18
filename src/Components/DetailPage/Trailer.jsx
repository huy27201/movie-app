import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Trailer(props) {
    const { list, handleClick } = props
    const videos = list ? list.map(item => 
            <div key={item.id} className="detail-trailer">
                <div className="detail-trailer-img" onClick={() => handleClick(item.key)}>
                    <img src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`} alt={item.key} />
                    <div className="detail-trailer-icon">
                        <FaPlay  />
                    </div>
                </div>
            </div>) 
        : ''

    const sliderSetting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1216,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }    
    return (
        <>
            <h3 className="slider-title">Trailer</h3>
            <IconContext.Provider value={{color: '#fff', size: '2rem'}}>
                <Slider {...sliderSetting} className="detail-trailers">
                    {videos}
                </Slider>
            </IconContext.Provider>
        </>
    )
}

export default Trailer
