import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import './LoginPage.scss'
function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email);
        console.log(password);
    }
    const handleEmail = e => {
        const value = e.target.value
        console.log(value);
        setEmail(value)
    }
    const handlePassword = e => {
        const value = e.target.value
        console.log(value);
        setPassword(value)
    }

    return (
        <div className="main-section">
            <div className="section">
                <div className="flex-center">
                    <div className="box">
                        <h1 className="login-title">Đăng nhập</h1>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="field">
                                <input 
                                    type="text" 
                                    placeholder="Email" 
                                    className="login-input" 
                                    value={email}
                                    onChange={handleEmail}
                                />
                            </div>
                            <div className="field">
                                <input 
                                    type="password" 
                                    placeholder="Mật khẩu" 
                                    className="login-input" 
                                    value={password}
                                    onChange={handlePassword}
                                />
                            </div>
                            <div className="field">
                                <input type="checkbox" id="remember" className="login-checkbox"/>
                                <label htmlFor="remember" className="label">Ghi nhớ</label>
                            </div>
                            <button className="login-btn blue-btn">Đăng nhập</button>
                            <button className="login-btn red-btn">
                                <FaGoogle  />
                                <span className="btn-span">Đăng nhập với Google</span>
                            </button>
                        </form>
                        <div className="login-link">
                            <Link to="/" className="link">Đăng ký</Link>
                            <span className="login-devide">|</span>
                            <Link to="/" className='link'>Quên mật khẩu</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage
