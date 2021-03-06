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
    const { login, googleLogin } = useAuth()
    const history = useHistory()

    const handleSubmit = async e => {   
        e.preventDefault()
        try {
            setLoading(true)
            switch (e.nativeEvent.submitter.name) {
                case 'email':
                    await login(email, password)
                    history.push('/')
                    break
                case 'google':
                    await googleLogin()
                    history.push('/')
                    break
                default:
                    break
            }
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
                            <button
                                className="login-btn blue-btn" 
                                disabled={loading}
                                name="email"
                            >
                                Đăng nhập
                            </button>
                            <button 
                                className="login-btn red-btn"
                                disabled={loading}
                                name="google"
                            >
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
