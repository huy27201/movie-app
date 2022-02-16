import React from 'react'
import './Pagination.scss'
import ReactPaginate from 'react-paginate'

function PagePagination(props) {
    const { onPageChange, totalPages } = props

    const handleClick = event => {
        // event.selected starts at 0
        onPageChange(event.selected + 1)
    }

    return (
        <div className="pagination-container">
            <ReactPaginate
                containerClassName="pag-list"
                pageLinkClassName="pag-btn"
                activeLinkClassName="pag-active"
                previousLinkClassName="pag-btn pag-arrow"
                nextLinkClassName="pag-btn pag-arrow"
                breakLinkClassName="pag-break"
                breakLabel="..."
                onPageChange={handleClick}
                pageRangeDisplayed={3}
                pageCount={totalPages}
                renderOnZeroPageCount={null}
                marginPagesDisplayed={1}
            />
        </div>
    )
}

export default PagePagination
