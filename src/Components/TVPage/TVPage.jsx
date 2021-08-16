import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PosterList from '../Poster/PosterList'

function TVPage() {
    const [tvList, setTvList] = useState({})
    
    const fetchFunc = (url, callback) => {
        axios.get(url)
        .then(res => {
            console.log(res.data);
            callback(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        const tvUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi&page=1&sort_by=popularity.desc`

        fetchFunc(tvUrl, setTvList)
    }, [])

    return (
        <div className="container">
            <div className="section">
                <PosterList list={tvList} />
            </div>
        </div>
    )
}

export default TVPage
