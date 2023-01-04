import React, {useState} from 'react'
import '../styles/Search.css'
import {AiOutlineSearch} from 'react-icons/ai'

function Search({ handleSearch, isSearchIconClicked }) {
    
    const handleChange = (e) => {
        handleSearch(e.target.value)
    }

    return (
        <div className='search-container' style={{display: isSearchIconClicked ? 'flex' : 'none'}}>
            <div className="row-1">
                <form className='search'>
                    <input id='search-bar' type="text" placeholder=' Search...' onChange={handleChange}/>
                    {/* <button className='search-icon'><AiOutlineSearch /></button> */}
                </form>
            </div>
            <br></br>
            <div className="row-2">
                <h2 className="filter-title">Filter by Medium:</h2>
                <button className="medium-button">Photography</button>
                <button className="medium-button">Illustration</button>
                <button className="medium-button">Print</button>
                <button className="medium-button">Fashion</button>
                <button className="medium-button">Painting</button>
                <button className="medium-button">Drawing</button>
                <button className="medium-button">Sculpture</button>
                <button className="medium-button">Mixed Media</button>
                <button className="medium-button">Digital Art</button>
            </div>
        </div>
    )
}
export default Search