import React, {useState} from 'react';
import '../styles/NavBar.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom'

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
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/artwork'>Browse Art</Link></li>
                    <li><Link to='/artwork/gallery'>My Gallery</Link></li>
                    <li><Link to='/artwork/cart' className='cart'>{showMenu ? "Cart" : <AiOutlineShoppingCart className='cart-icon' size={34} />}</Link></li>
                </ul>
            </menu>
            <div className='menu-icon' onClick={toggleMenu} >{showMenu ? <RiCloseLine size={40}/> : <GiHamburgerMenu size={34} color="#333" /> }</div>
        </nav>
    )
}
export default NavBar