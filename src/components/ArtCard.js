import React from 'react'

function ArtCard({ artpiece }) {

    console.log(artpiece)

    const { artist, image, icon, title, price, description} = artpiece

    // console.log(artist)


    return (
        <li className='card'>
            <h4>{artist}</h4>
            <img src={image} alt={title} />
            <img src={icon} alt={title} />
            <p>{title}</p>
            <p>{price}</p>
            <p>{description}</p>
        </li>
    )
}

export default ArtCard