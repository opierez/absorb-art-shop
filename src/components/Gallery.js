import React from 'react'
import ArtCard from './ArtCard'
import '../styles/Gallery.css'

function Gallery({ myGallery, renderImage }) {

    // console.log(myGallery)


    const renderMyGallery = myGallery.map(artpiece => {
        return (
        <div>
            <ArtCard key={artpiece.id} artpiece={artpiece} renderImage={renderImage}/>
            <button>Edit</button>
        </div>
        )
    })

    return (
        <div>
            <h1>Gallery</h1>
            {renderMyGallery}
        </div>
    )
}

export default Gallery