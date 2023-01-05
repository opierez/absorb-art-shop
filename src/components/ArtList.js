import React from 'react'
import ArtCard from './ArtCard'

function ArtList({ art, renderImage }) {
    const renderArtList = art.map(artpiece => {
        return <ArtCard key={artpiece.id} artpiece={artpiece} renderImage={renderImage}/>
    })

    return (
        <ul className="cards">{renderArtList}</ul>
    )
}

export default ArtList