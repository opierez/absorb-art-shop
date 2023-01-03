import React, { useState } from 'react';
import '../styles/NavBar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom'

function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    
    function toggleMenu(){
        setShowMenu(!showMenu)
    }

    function closeMenu(){
        setShowMenu(false)
    }

    return (
        <nav className='navbar-container container'>
            <div className='logo'>
                <p className='logo-text'>our logo</p>
            </div>
            <menu>
                <ul className='nav-links grow' id={showMenu ? "mobile-show" : "mobile-hide"}>
                    <li><Link to='/' onClick={closeMenu}>Home</Link></li>
                    <li><Link to='/artwork' onClick={closeMenu}>Browse Art</Link></li>
                    <li><Link to='/artwork/gallery' onClick={closeMenu}>My Gallery</Link></li>
                    <li><Link to='/artwork/cart' onClick={closeMenu}>Cart</Link></li>
                </ul>
            </menu>
            <div className='menu-icon' onClick={toggleMenu} >{showMenu ? <RiCloseLine size={30}/> : <GiHamburgerMenu size={27} color="#333" /> }</div>
        </nav>
    )
}
export default NavBar