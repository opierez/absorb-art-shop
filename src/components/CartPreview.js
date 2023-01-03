import React, {useState} from "react";
import "../styles/CartPreview.css"
import {Link} from 'react-router-dom';
import {BsArrowRight} from "react-icons/bs"

function CartPreview({openCart}){

    return(
        <div className="cart-preview">
            <h1>Cart</h1>
            {/* Render Items in Cart here */}
            <p>Total: </p>
            <Link to='/artwork/cart' onClick={openCart}>Go to Cart</Link>
        </div>
    )
}

export default CartPreview