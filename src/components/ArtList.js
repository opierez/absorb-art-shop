import React from 'react'
import ArtCard from './ArtCard'
import '../styles/ArtList.css'

function ArtList({ art, renderImage }) {

    const renderArtList = art.map(artpiece => {
        return <ArtCard key={artpiece.id} artpiece={artpiece} renderImage={renderImage}/>
    })

    if (renderArtList.length === 0) {
        return <p id="no-results">No Results Found</p>
    } else {
        return <ul className="cards">{renderArtList}</ul>
    }
}

export default ArtList