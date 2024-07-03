import React, { useState, useEffect } from 'react'
import PosterList from '../Poster/PosterList'
import { useStore } from '../../Contexts/StoreContext'
import Loading from '../Loading/Loading'
import FadeIn from 'react-fade-in'

function Collection() {
    const { getFilms, filmCollection } = useStore()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFilms()
        .then(setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                loading ? <Loading /> : 
                <FadeIn>
                    <div className="main-section">
                        <div className="section">
                            <h1 className="title">Bộ sưu tập phim của bạn</h1>
                            <PosterList
                                list={filmCollection}
                            />
                        </div>
                    </div>
                </FadeIn>
            }
        </>
    )
}

export default Collection
