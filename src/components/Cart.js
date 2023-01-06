import React, {useState, useEffect} from 'react'
import "../styles/Cart.css"
// import ArtCard from './ArtCard'
function Cart({renderImage, shoppingCart, handleToggleCart}) {
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
      handlePrice();
    },)

    const renderCartList = shoppingCart.map(artpiece => {
        const {id, artist, image, product, title, price, firstDimension, secondDimension, unit} = artpiece
            return(
            <li className="item" id={id} >
                <div className='image-container'>
                    {renderImage(image, title, id)}
                </div>
                <div className='details'>
                    <h2 className='title'>{title}</h2>
                    {/* <ArtCard key={artpiece.id} artpiece={artpiece} renderImage={renderImage}/> */}
                    <h4 className='artist'>{artist}</h4>
                        {firstDimension !== "" &&
                            <p className='size'>{firstDimension}x{secondDimension}{unit}</p>
                        }
                    <p className='product'>{product} • {`$${parseFloat(price).toFixed(2)}`} </p>
                </div>
                <div className="column-2"></div>
                <button className="delete_button" onClick={() => handleDelete(id)}>X</button>
            </li>
            )
    })

    const handlePrice = () => {
        let priceSum = 0;
        shoppingCart.map((artwork) => (priceSum += artwork.price));
        setTotalPrice(priceSum);
    }

    function handleDelete(id){
        const removeItem = {
            inCart: false,
        }
        
        fetch(`http://localhost:6001/artwork/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(removeItem)         
        })
        .then(resp => resp.json())
        .then(resp => handleToggleCart(resp))
    }

    return (
        <article>
            <div className='cart-container'>
                <div className='cart'>
                    <h1 className='cart-header'>Review Your Cart</h1>
                    <ul className='cart-items'>{renderCartList}</ul>
                </div>
                <div className='checkout'>
                    <p>{`Total (${shoppingCart.length} items): $${parseFloat(totalPrice).toFixed(2)}`}</p>
                </div>
            </div>
        </article>
    )
}

export default Cart