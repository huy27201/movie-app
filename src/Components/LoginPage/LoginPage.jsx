import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { useAuth } from '../../Contexts/AuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './LoginPage.scss'

toast.configure()

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const history = useHistory()

    async function handleSubmit(e) {    
        e.preventDefault()
        try {
            setLoading(true)
            await login(email, password)
            history.push('/')
        }
        catch(err) {
            toast.error('Đăng nhập thất bại.')
            setLoading(false)
        }
    }
    const handleEmail = e => {
        const value = e.target.value
        setEmail(value)
    }
    const handlePassword = e => {
        const value = e.target.value
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
                                    type="email" 
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
                            <button className="login-btn blue-btn" disabled={loading}>Đăng nhập</button>
                            <button className="login-btn red-btn" disabled={loading}>
                                <FaGoogle  />
                                <span className="btn-span">Đăng nhập với Google</span>
                            </button>
                        </form>
                        <div className="login-link">
                            <Link to="/signup" className="link">Đăng ký</Link>
                            <span className="login-devide">|</span>
                            <Link to="/forgot" className='link'>Quên mật khẩu</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage
