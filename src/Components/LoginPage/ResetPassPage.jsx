import './LoginPage.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function ResetPassPage() {
    const { resetPassword } = useAuth()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            await resetPassword(email)
            toast.success('Vui lòng kiểm tra email trong hộp thư của bạn')
        }
        catch(err) {
            toast.error('Gửi email thất bại.')
        }
        setLoading(false)
    }

    const handleEmail = e => {
        const value = e.target.value
        setEmail(value)
    }

    return (
        <div className="main-section">
            <div className="section">
                <div className="flex-center">
                    <div className="box">
                        <h1 className="login-title">
                            Lấy lại mật khẩu
                        </h1>
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
                            <button className="login-btn blue-btn" disabled={loading}>Gửi</button>
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

export default ResetPassPage
