import React from 'react'
import ArtCard from './ArtCard'

function ArtList({ art }) {

    // console.log(art)

    const renderArtList = art.map(artpiece => {
        return <ArtCard key={artpiece.id} artpiece={artpiece}/>
    })

    return (
        <ul className="cards">{renderArtList}</ul>
       
    )
}

export default ArtList