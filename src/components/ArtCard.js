import React from 'react'
import '../styles/Cards.css'

function ArtCard({ artpiece }) {

    // console.log(artpiece)

    const { artist, image, product, title, price} = artpiece

    // console.log(artist)
    // console.log(icon)


    return (
        <li className='card'>
            <h2>{artist}</h2>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>{product} • {`$${parseFloat(price).toFixed(2)}`} </p>
    
            
        </li>
    )
}

export default ArtCard