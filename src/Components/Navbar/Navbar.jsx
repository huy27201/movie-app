import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Assets/img/Logo.png'
import './Navbar.scss'
import { IconContext } from 'react-icons'
import  { FaSearch } from 'react-icons/fa'
function Navbar() {

    const [active, setActive] = useState(false)
    
    window.addEventListener("scroll", event => {
        let height = window.pageYOffset
        height > 50 ? setActive(true) : setActive(false)
    })

    return (
            <div className={active ? "navbar navbar-purple" : "navbar"}>
                <div className="nav-item" id="nav-brand">
                    <Link to="/" id="nav-logo">
                            <img src={ Logo } alt="Xemphim Logo" />
                    </Link>
                </div>
                <div id="nav-right">
                    <IconContext.Provider value={{color: '#fff'}}>
                        <ul id="nav-list">
                            <li>
                                <NavLink to="/search" className="nav-item" activeClassName="active">
                                    <FaSearch />
                                    <span>Tìm kiếm</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/movie" className="nav-item" activeClassName="active">
                                    Phim Lẻ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/show" className="nav-item" activeClassName="active">
                                    Phim Bộ
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faq" className="nav-item" activeClassName="active">
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </IconContext.Provider>
                    <div id="nav-btn-container">
                        <a href="#" className="nav-btn nav-item">Đăng nhập</a>
                    </div>
                </div>
                
            </div>
        
    )
}

export default Navbar
