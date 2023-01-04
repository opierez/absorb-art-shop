import React, {useState} from 'react'
import '../styles/Search.css'


function Search({ setSearchTerm }) {


    return (
        <div className='search-and-filter-container'>
                <form className='search'>
                    <input id='search-bar' type="text" placeholder=' Search...' onChange={e => setSearchTerm(e.target.value)}/>
                    {/* <button className='search-icon'><AiOutlineSearch /></button> */}
                </form>
        </div>
    )
}
export default Search