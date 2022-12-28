import React from 'react'

function ArtCard({ artpiece }) {

    // console.log(artpiece)

    const { artist, image, icon, title, price, description} = artpiece

    // console.log(artist)
    // console.log(icon)


    return (
        <div className='card'>
            <h2>{artist}</h2>
            <img src={icon} alt={title} />
            <h4>{title}</h4>
            <h4>{price}</h4>
            <p>{description}</p>
        </div>
    )
}

export default ArtCard