import React, { useState, useEffect } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import Logo from '../../Assets/img/Logo.png'
import './Navbar.scss'
import { IconContext } from 'react-icons'
import { FaSearch, FaChevronDown, FaFilm, FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../../Contexts/AuthContext'
import { useStore } from '../../Contexts/StoreContext'
import { toast } from 'react-toastify'

toast.configure()

function Navbar() {
    const { currentUser, logout } = useAuth()
    const { resetCollection } = useStore()
    const [active, setActive] = useState(false)
    const history = useHistory()

    useEffect(() => {
        const scrollEffect = window.addEventListener("scroll", event => {
            const height = window.pageYOffset
            height > 50 ? setActive(true) : setActive(false)
        })

        return () => window.removeEventListener("scroll", scrollEffect)
    })

    const handleLogOut = async () => {
        try {
            await logout()
            await resetCollection()
            history.push('/login')
        }
        catch(err) {
            toast.error('Đăng xuất thất bại.')
        }
    }

    return (
            <div className={active ? "navbar navbar-purple" : "navbar"}>
                <div id="nav-brand">
                    <Link to="/" id="nav-logo">
                            <img src={ Logo } alt="Xemphim Logo" />
                    </Link>
                </div>
                <div id="nav-right">
                    <IconContext.Provider value={{color: '#fff'}}>
                        <ul id="nav-list">
                            <li className="nav-li">
                                <NavLink to="/search" className="nav-item" activeClassName="active">
                                    <FaSearch />
                                    <span>Tìm kiếm</span>
                                </NavLink>
                            </li>
                            <li className="nav-li">
                                <NavLink to="/movie" className="nav-item" activeClassName="active">
                                    Phim Lẻ
                                </NavLink>
                            </li>
                            <li className="nav-li">
                                <NavLink to="/tv" className="nav-item" activeClassName="active">
                                    Phim Bộ
                                </NavLink>
                            </li>
                            <li className="nav-li">
                                <NavLink to="/faq" className="nav-item" activeClassName="active">
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </IconContext.Provider>
                    {
                        currentUser ? 
                        <div className="nav-li nav-profile">
                            <IconContext.Provider value={{color: '#428bca', size: '1rem'}}>
                                <div className="nav-item">
                                    <span>
                                        {currentUser.displayName}
                                    </span>
                                    <FaChevronDown
                                        className="nav-profile-icon"
                                    />
                                </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: 'profile-icon'}}>
                                <ul className="profile-list">
                                    <li>
                                        <Link to="/collection" className="profile-li">
                                            <FaFilm />
                                            Bộ sưu tập
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className="profile-li" onClick={handleLogOut}>
                                            <FaSignOutAlt />
                                            Đăng xuất
                                        </Link>
                                    </li>
                                </ul>
                            </IconContext.Provider>
                        </div> :
                        <div id="nav-btn-container">
                            <Link to="/login" className="nav-btn">
                                Đăng nhập
                            </Link>
                        </div>
                    }
                </div>
                
            </div>
        
    )
}

export default Navbar
