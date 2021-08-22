import React, { useState, useRef } from 'react'

function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeout = useRef(null)

    const handleSearch = e => {
        const value = e.target.value
        setSearchTerm(value)

        if (!props.onSubmit) return

        if (typingTimeout.current) 
            clearTimeout(typingTimeout.current)

        typingTimeout.current = setTimeout(() => {
            const formValues = {
                searchTerm: value
            }
            props.onSubmit(formValues)
        }, 300)
    }
    
    return (
        <form action="">
            <input 
                type = "text" 
                placeholder = "Nhập tên phim..."
                onChange = {handleSearch}
                value = {searchTerm}
            />
        </form>
    )
}

export default SearchForm
