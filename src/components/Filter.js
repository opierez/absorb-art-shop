import React from 'react'

function Filter({ setFilter }) {

    return (
        <div className='search-and-filter-container'>
            <select onChange={e => setFilter(e.target.value)}>
                <option value="">Filter by Medium</option>
                <option value="Photography">Photography</option>
                <option value="Illustration">Illustration</option>
                <option value="Print">Print</option>
                <option value="Fashion">Fashion</option>
                <option value="Painting">Painting</option>
                <option value="Drawing">Drawing</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Mixed Media">Mixed Media</option>
                <option value="Digital Art">Digital Art</option>
            </select>
        </div>
    )
}

export default Filter