import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import ActorImageList from './ActorImageList'
import './ActorPage.scss'

function ActorPage() {
    const { id } = useParams()
    const [profile, setProfile] = useState({})
    const [images, setImages] = useState({})
    const [checkParams, setCheckParams] = useState(false)

    const fetchFunc = (url, callback) => {
        axios.get(url)
        .then(res => {
            console.log(res.data);
            callback(res.data)
        })
        .catch(err => {
            console.log(err)
        })  
    }
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/person/${id}?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi`
        axios.get(url)
        .then(res => {
            console.log(res.data);
            setProfile(res.data)
            setCheckParams(true)
        })
        .catch(err => {
            setCheckParams(false)
        })  
    }, [])
    useEffect(() => {
        if (checkParams) {
            const imageUrl = `https://api.themoviedb.org/3/person/${id}/images?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi`
            fetchFunc(imageUrl, setImages)
        }

    }, [checkParams])
    return (
        <>
            {
                checkParams ? 
                    <>
                        <div className="main-section">
                            <div className="section">
                                <div className="detail actor-neg">
                                    <div className="detail-item detail-card">
                                        <div className="detail-poster">
                                            <img src={profile.profile_path ? `https://image.tmdb.org/t/p/w300${profile.profile_path}`
                                            : 'https://i.imgur.com/wLJJctg.png'} alt={profile.name} />
                                        </div>
                                        <h2 className="profile-title">Thông tin cá nhân</h2>
                                        <p className="profile-key">
                                            Nghề nghiệp
                                        </p>
                                        <p className="profile-value">
                                            {profile.known_for_department}
                                        </p>
                                        <p className="profile-key">
                                            Giới tính
                                        </p>
                                        <p className="profile-value">
                                            {profile.gender === 1 ? 'Nữ' : 'Nam'}
                                        </p>
                                        <p className="profile-key">
                                            Ngày sinh
                                        </p>
                                        <p className="profile-value">
                                            {profile.birthday}
                                            </p>
                                        <p className="profile-key">
                                            Nơi sinh
                                        </p>
                                        <p className="profile-value">
                                            {profile.place_of_birth}
                                        </p>
                                    </div>
                                    <div className="detail-item detail-info">
                                        <h1 className="profile-name">
                                            {profile.name}
                                        </h1>
                                        <h2 className="profile-title">Tiểu sử</h2>
                                        <p className="detail-overview">{profile.biography}</p>
                                        <h2 className="profile-title">Ảnh</h2>
                                        <ActorImageList
                                            list={images.profiles}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : <NotFound />
            }
        </>
        
    )
}

export default ActorPage
