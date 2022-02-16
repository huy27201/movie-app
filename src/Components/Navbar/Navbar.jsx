import React, { useState, useEffect } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import Logo from '../../Assets/img/Logo.png'
import './Navbar.scss'
import { IconContext } from 'react-icons'
import { FaSearch, FaChevronDown, FaFilm, FaSignOutAlt, FaBars } from 'react-icons/fa'
import { useAuth } from '../../Contexts/AuthContext'
import { useStore } from '../../Contexts/StoreContext'
import { toast } from 'react-toastify'

toast.configure()

function Navbar() {
    const { currentUser, logout } = useAuth()
    const { resetCollection } = useStore()
    const [active, setActive] = useState(false)
    const [sideActive, setSideActive] = useState(false)
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
            setSideActive(false)
        }
        catch(err) {
            toast.error('Đăng xuất thất bại.')
        }
    }

    const closeSideMenu = () => {
        setSideActive(false)
    }

    return (
        <>
            <div className={active ? "navbar navbar-purple nav-widescreen" : "navbar nav-widescreen"}>
                <div id="nav-brand">
                    <Link to="/" id="nav-logo">
                            <img src={ Logo } alt="Xemphim Logo" />
                    </Link>
                </div>
                <div className="nav-right">
                    <IconContext.Provider value={{color: '#fff'}}>
                        <ul className="nav-list">
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
                        <div className="nav-btn-container">
                            <Link to="/login" className="nav-btn">
                                Đăng nhập
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <div className={active ? "navbar navbar-purple nav-smallscreen" : "navbar nav-smallscreen"}>
                <a href="# " className="nav-menu-btn" onClick={() => setSideActive(true)}>
                    <FaBars />
                </a>
                <div id="nav-brand">
                    <Link to="/" id="nav-logo">
                            <img src={ Logo } alt="Xemphim Logo" />
                    </Link>
                </div>
                <div className="nav-right">
                    <IconContext.Provider value={{color: '#fff'}}>
                        <ul className="nav-list">
                            <li className="nav-li">
                                <NavLink to="/search" className="nav-item" activeClassName="active">
                                    <FaSearch />
                                    <span>Tìm kiếm</span>
                                </NavLink>
                            </li>
                        </ul>
                    </IconContext.Provider>
                </div>
            </div>
            <div className={sideActive ? "nav-overlay nav-overlay-active" : "nav-overlay"} onClick={closeSideMenu}></div>
            <div className={sideActive ? "side-menu side-menu-active" : "side-menu"}>
                {
                    currentUser ? 
                    <div className="nav-li nav-profile">
                        <div className="nav-item side-profile">
                            <span>
                                {currentUser.displayName}
                            </span>
                        </div>
                        <IconContext.Provider value={{className: 'profile-icon'}}>
                            <ul className="nav-list">
                                <li className="nav-li">
                                    <NavLink to="/collection" className="nav-item profile-li" activeClassName="active" onClick={closeSideMenu}>
                                        <FaFilm />
                                        Bộ sưu tập
                                    </NavLink>
                                </li>
                                <li className="nav-li">
                                    <Link to='/' className="nav-item profile-li" onClick={handleLogOut}>
                                        <FaSignOutAlt />
                                        Đăng xuất
                                    </Link>
                                </li>
                            </ul>
                        </IconContext.Provider>
                    </div> :
                    <>
                        <div className="nav-btn-container">
                            <Link to="/login" className="nav-btn" onClick={closeSideMenu}>
                                Đăng nhập
                            </Link>
                        </div>
                        <NavLink to="/signup" className="nav-item" activeClassName="active" onClick={closeSideMenu}>
                            Đăng ký
                        </NavLink>
                    </>
                }
                <hr></hr>
                <ul className="nav-list">
                    <li className="nav-li">
                        <NavLink to="/movie" className="nav-item" activeClassName="active" onClick={closeSideMenu}>
                            Phim Lẻ
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/tv" className="nav-item" activeClassName="active" onClick={closeSideMenu}>
                            Phim Bộ
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/faq" className="nav-item" activeClassName="active" onClick={closeSideMenu}>
                            FAQ
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
