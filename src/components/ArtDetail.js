import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ArtDetails.css'

function ArtDetail({handleAddToCart}) {

    const [artwork, setArtwork] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [inCart, setInCart] = useState(false)

    
    console.log(useParams())
    
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
    
    function handleCart(){
        setInCart(false)
        if (inCart === true){
            handleAddToCart(artwork)
        }
    }
    // console.log(image)


    return (
        <div className="container">
            <div className="column-1">
                <h1>{title} by {artist}</h1>
                <img src={image} alt={title}/>
            </div>
            <div className="column-2">
                <ul>
                    <li>Description: {description}</li>
                    <li>{product}</li> 
                    <li>{`$${parseFloat(price).toFixed(2)}`}</li>
                    <li>
                        <button className="cart-button" onClick={handleCart}>{inCart ? "In Cart!" : "Add to Cart"}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ArtDetail