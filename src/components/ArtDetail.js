import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


function ArtDetail() {

    const [artwork, setArtwork] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:6001/artwork/${id}`)
            .then(resp => resp.json())
            .then(artwork => {
                setArtwork(artwork)
                setIsLoaded(!isLoaded)
            })
    }, [id])

    if (!isLoaded) return <h2>Loading...</h2>

    const { artist, image, product, title, price, description } = artwork

    console.log(image)


    return (
        <div>
            <h1>Art Detail</h1>
            <h2>{artist}</h2>
            <img src={image} alt={title}/>
            <h3>{product}</h3>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
}

export default ArtDetail