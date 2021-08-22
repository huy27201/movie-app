import React from 'react'
import Select from 'react-select'
import './Filters.scss'
import  { countries } from './CountryOptions'
import { genres } from './GenreOptions'
import { sortOptions } from './SortOptions'
import { years } from './YearOptions'

function Filters(props) {
    const handleGenre = event => {
        props.handleGenre(event.value)
    }
    const handleCountry = event => {
        props.handleCountry(event.value)
    }
    const handleYear = event => {
        props.handleYear(event.value)
    }
    const handleSort = event => {
        props.handleSort(event.value)
    }

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
                    <label className="filters-label">Quốc gia:</label>
                    <Select 
                        options = {countries}
                        defaultValue = {countries[0]} 
                        isSearchable = {false}
                        onChange = {handleCountry}
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
