import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import  { FaFacebookSquare } from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-section">
                <p className="footer-question">Phim chất lượng cao online của <Link to="/" className ="link">XemPhim</Link> khác gì so với các trang phim khác?</p>
                <ul className="footer-content"> 
                    <li>Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân giải HD (720p) là cao nhất</li>
                    <li>Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần phim online thông thường - đây là yếu tố quyết định độ nét của phim (thậm chí còn quan trọng hơn độ phân giải)</li>
                    <li>Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang phim khác (kể cả Youtube)</li>
                    <li>Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải cao</li>
                    <li>Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề của riêng mình để xem online</li>
                    <li>Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh & tiếng Việt), phù hợp với những người muốn học tiếng Anh qua phụ đề phim</li>
                </ul>
                <div className="footer-contact">
                    <Link to="/" className ="link">Liên hệ</Link>
                    <IconContext.Provider value={{color: '#4267b2', size: '1.3rem'}}>
                        <a href="https://www.facebook.com/Xemphim.Original" className="btn-fb" target="_blank" rel="noreferrer">
                            <FaFacebookSquare /> 
                            <span>XemPhim.Official</span>
                        </a>
                    </IconContext.Provider>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Footer
