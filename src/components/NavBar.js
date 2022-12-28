import React, {useState} from 'react';
import '../styles/NavBar.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    function toggleMenu(){
        setShowMenu(!showMenu)
    }
    return (
        <nav className='navbar-container'>
            <div className='logo'>
                <p className='logo-text'>our logo</p>
            </div>
            <menu>
                <ul className='nav-links grow' id={showMenu ? "mobile-show" : "mobile-hide"}>
                    <li><a href='index.html'>Home</a></li>
                    <li><a href='#'>Browse Art</a></li>
                    <li><a href='#search'>My Gallery</a></li>
                    <li><a href='#' className='cart'>{showMenu ? "Cart" : <AiOutlineShoppingCart className='cart-icon' size={34} />}</a></li>
                </ul>
            </menu>
            <div className='menu-icon' onClick={toggleMenu} >{showMenu ? "X" : "Hamburger Menu" }</div>
        </nav>
    )
}
export default NavBar