import React from 'react'
import '../styles/Cards.css'
import { useHistory } from "react-router-dom";

function ArtCard({ artpiece }) {

    // console.log(artpiece)

    const {id, artist, image, product, title, price, dimensions} = artpiece

    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/artwork/${id}`)
    }

    return (
            <li className='card'>
                <h2>{artist}</h2>
                <img src={image} alt={title} onClick={() => handleClick(id)}/>
                <h4>{title}</h4>
                <p>{dimensions}</p>
                <p>{product} • {`$${parseFloat(price).toFixed(2)}`} </p>
            </li>
    )
}

export default ArtCard