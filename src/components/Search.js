import React from 'react'
import '../styles/Search.css'
import {AiOutlineSearch} from 'react-icons/ai'


function Search() {
    return (
        <div className='search-bar-container'>
            <form className='search'>
                <input id='search-bar' type="text" placeholder=' Search...'/>
                <button className='search-icon'><AiOutlineSearch /></button>
            </form>
        </div>
    )
}
export default Search