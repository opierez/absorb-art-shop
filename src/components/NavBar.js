import React, { useState } from 'react';
import '../styles/NavBar.css';
import '../styles/Search.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import {RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import CartPreview from './CartPreview';


function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    const [showCartPreview, setShowCartPreview] = useState(false)
    
    
    function toggleMenu(){
        setShowMenu(!showMenu)
    }

    function closeMenu(){
        setShowMenu(false)
    }

    function openCart(){
        setShowCartPreview(!showCartPreview)
    }

    return (
        <nav className='navbar-container container'>
            <Link to="/" className='logo'>
                <p className='logo-text'>our logo</p>
            </Link>
            <menu>
                <ul className='nav-links grow' id={showMenu ? "mobile-show" : "mobile-hide"}>
                    <li><Link to='/' onClick={closeMenu}>Home</Link></li>
                    <li><Link to='/artwork' onClick={closeMenu}>Browse Art</Link></li>
                    <li><Link to='/artwork/gallery' onClick={closeMenu}>My Gallery</Link></li>
                    <li><Link to='#' onClick={closeMenu, openCart}>Cart</Link></li>
               </ul>
            </menu>
            <div className='menu-icon' onClick={toggleMenu} >{showMenu ? <RiCloseLine size={30}/> : <GiHamburgerMenu size={27} color="#333" /> }</div>
            {showCartPreview ? <CartPreview openCart={openCart}/> : null}
        </nav>
    )
}
export default NavBar