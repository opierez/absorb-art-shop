import React from 'react'
import '../styles/Cards.css'

function ArtCard({ artpiece, renderImage }) {

    const {id, artist, image, product, title, price, firstDimension, secondDimension, unit} = artpiece

    return (
    
            <li className='card'>
                <h2 className='title'>{title}</h2>
                {renderImage(image, title, id)}
                <h4 className='artist'>{artist}</h4>
                    {firstDimension !== "" &&
                        <p className='size'>{firstDimension}x{secondDimension}{unit}</p>
                    }
                <p className='product'>{product} • {`$${parseFloat(price).toFixed(2)}`} </p>
            </li>
    )
}

export default ArtCard