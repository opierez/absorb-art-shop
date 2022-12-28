import React from 'react'
import '../styles/Search.css'

function Search() {
    return (
        <div className='search-bar-container'>
            <form className='search'>
                <input id='search-bar' type="text" placeholder='Search...'/>
            </form>
        </div>
    )
}
export default Search