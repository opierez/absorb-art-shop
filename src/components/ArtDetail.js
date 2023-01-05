import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ArtDetails.css'

function ArtDetail({renderImage, handleToggleCart}) {
    const [artwork, setArtwork] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInCart, setIsInCart] = useState(false)
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:6001/artwork/${id}`)
        .then(resp => resp.json())
        .then(artwork => {
            setArtwork(artwork)
            setIsInCart(artwork.inCart)
            setIsLoaded(!isLoaded)
        })
    }, [id])
    
    const { artist, image, product, title, price, description, firstDimension, secondDimension, unit} = artwork
    
    if (!isLoaded) return <h2>Loading...</h2>
    
    function handleCart(){
        setIsInCart(!isInCart)
        const updateCartStatus = {
            inCart: !isInCart,
        }
        
        fetch(`http://localhost:6001/artwork/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateCartStatus)         
        })
        .then(resp => resp.json())
        .then(resp => handleToggleCart(resp))
    }
    
    return (
        <div className="container">
            <div className="column-1">
                <h1>{title} by {artist}</h1>
                <br></br>
                {renderImage(image, title)}
            </div>
            <div className="column-2">
                <ul>
                    <li>{description}</li>
                    {firstDimension !== "" && <li>{firstDimension}x{secondDimension}{unit}</li>}
                    <li>{product}</li> 
                    <li>{`$${parseFloat(price).toFixed(2)}`}</li>
                    <li>
                        <button className="cart-button" onClick={handleCart}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ArtDetail