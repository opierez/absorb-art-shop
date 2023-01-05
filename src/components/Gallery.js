import React from 'react'
import '../styles/Gallery.css'
import { Link } from "react-router-dom"

function Gallery({ myGallery, renderImage }) {

    const renderMyGallery = myGallery.map(artpiece => {
        
        const {id, artist, image, product, title, price, firstDimension, secondDimension, unit, description, mediums} = artpiece
 
        return (
            <li className='card'>
                <h2 className='artist'>{artist}</h2>
                {renderImage(image, title, id)}
                <h4 className='title'>{title}</h4>
                    {firstDimension !== "" &&
                        <p className='size'>{firstDimension}x{secondDimension}{unit}</p>
                    }
                <p className='product'>{product} • {`$${parseFloat(price).toFixed(2)}`} </p>
                <p>{description}</p>
                <p>{mediums}</p>
                <Link to={`/artwork/${id}/edit`}>
                    <button>Edit</button>
                </Link>
            </li>
        )
    })

    return (
        <div>
            {renderMyGallery}
        </div>
    )
}

export default Gallery