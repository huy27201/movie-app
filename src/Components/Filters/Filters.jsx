import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import './Filters.scss'
import  { languagesConfig } from './LanguageOptions'
import { genresConfig } from './GenreOptions'
import { sortOptions } from './SortOptions'
import { years } from './YearOptions'

function Filters(props) {
    const [genres, setGenres] = useState([{
        label: '- Tất cả -',
        value: '' 
    }])
    const [languages, setLanguages] = useState([{
        label: '- Tất cả -',
        value: '' 
    }])

    const handleGenre = event => {
        props.handleGenre(event.value)
    }
    const handleLanguage = event => {
        props.handleLanguage(event.value)
    }
    const handleYear = event => {
        props.handleYear(event.value)
    }
    const handleSort = event => {
        props.handleSort(event.value)
    }

    useEffect(() => {
        
        try {
            // genres filters
            genresConfig.then(res => {
                if (props.type === "movie") setGenres([...genres, ...res.movieGenres])
                else if (props.type === "tv") setGenres([...genres, ...res.tvGenres])
            }) 
    
            // languages filters
            languagesConfig.then(res => {
                setLanguages([...languages, ...res])
            }) 
        }
        catch (err) {
            console.log(err);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="filters-container">
            <div className="filters-block filters-left">
                <div className="filters-item">
                    <label className="filters-label">Thể loại:</label>
                    <Select 
                        options = {genres}
                        defaultValue = {genres[0]} 
                        isSearchable = {false}
                        onChange = {handleGenre}
                    />
                </div>
                <div className="filters-item">
                    <label className="filters-label">Ngôn ngữ:</label>
                    <Select 
                        options = {languages}
                        defaultValue = {languages[0]} 
                        isSearchable = {false}
                        onChange = {handleLanguage}
                    />
                </div>
                <div className="filters-item">
                    <label className="filters-label">Năm:</label>
                    <Select 
                        options = {years}
                        defaultValue = {years[0]} 
                        isSearchable = {false}
                        onChange = {handleYear}
                    />
                </div>
                <div className="filters-item">
                    <label className="filters-label">Sắp xếp:</label>
                    <Select
                        options = {sortOptions}
                        defaultValue = {sortOptions[0]} 
                        onChange = {handleSort}
                    />
                </div>
            </div>
            <div className="filters-block filters-right">
                
            </div>
        </div>
    )
}

export default Filters
