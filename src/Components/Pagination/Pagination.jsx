import React from 'react'
import './Pagination.scss'

function Pagination(props) {

    const handleClick = (event, newPage) => {
        event.preventDefault()
        if (newPage >= 1 && newPage <= props.totalPages) {
            props.onPageChange(newPage)
        }
            
    }
    return (
        <div className="pagination-container">
            <div className="pagination-list">
                <a href="# " className="pag-btn" onClick={event => handleClick(event, props.page - 1)}>Trang trước</a>
                <a href="# " className="pag-btn" onClick={event => handleClick(event, props.page + 1)}>Trang sau</a>
            </div>

        </div>
    )
}

export default Pagination
