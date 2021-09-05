import React from 'react'
import { PuffLoader } from 'react-spinners'

function Loading({ loading }) {
    return (
        <div className="loading">
            <PuffLoader
                color='#fff'
                size='100px'
            />
        </div>
    )
}

export default Loading
