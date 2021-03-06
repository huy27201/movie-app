import './LoginPage.scss'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { useAuth } from '../../Contexts/AuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function SignupPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { signup, googleLogin } = useAuth()
    const history = useHistory()
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            setLoading(true)
            await signup(name, email, password)
            history.push('/')
        }
        catch(err) {
            toast.error(err.message)
            setLoading(false)
        }
    }
    const handleGoogleLogIn = async () => {
        try {
            setLoading(true)
            await googleLogin()
            history.push('/')
        }
        catch (err) {
            toast.error(err.message)
            setLoading(false)
        }
    }
    const handleName = e => {
        const value = e.target.value
        setName(value)
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
                        <h1 className="login-title">Đăng ký</h1>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="field">
                                <input 
                                    type="text" 
                                    placeholder="Họ tên" 
                                    className="login-input" 
                                    value={name}
                                    onChange={handleName}
                                    required
                                />
                            </div>
                            <div className="field">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="login-input" 
                                    value={email}
                                    onChange={handleEmail}
                                    required
                                />
                            </div>
                            <div className="field">
                                <input 
                                    type="password" 
                                    placeholder="Mật khẩu" 
                                    className="login-input" 
                                    value={password}
                                    onChange={handlePassword}
                                    required
                                />
                            </div>
                            <div className="field">
                                <input type="checkbox" id="remember" className="login-checkbox" required/>
                                <label htmlFor="remember" className="label">Tôi đồng ý với các điều khoản</label>
                            </div>
                            <button 
                                className="login-btn blue-btn" 
                                disabled={loading}
                                name="email"
                            >
                                Đăng ký
                            </button>
                            <button 
                                className="login-btn red-btn"
                                disabled={loading}
                                type="button"
                                name="google"
                                onClick={handleGoogleLogIn}
                            >
                                <FaGoogle  />
                                <span className="btn-span">Đăng nhập với Google</span>
                            </button>
                        </form>
                        <div className="login-link">
                            <Link to="/login" className="link">Đăng nhập</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignupPage
