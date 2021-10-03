import React from 'react'
import './Pagination.scss'

function Pagination(props) {
    const { onPageChange, totalPages, page } = props
    const handleClick = (event, newPage) => {
        event.preventDefault()
        if (newPage >= 1 && newPage <= totalPages) 
            onPageChange(newPage)
    }

    return (
        <div className="pagination-container">
            <div className="pagination-list">
                <a href="# " className="pag-btn" onClick={event => handleClick(event, page - 1)}>Trang trước</a>
                <span className="pag-btn">{page}</span>
                <a href="# " className="pag-btn" onClick={event => handleClick(event, page + 1)}>Trang sau</a>
            </div>
        </div>
    )
}

export default Pagination
