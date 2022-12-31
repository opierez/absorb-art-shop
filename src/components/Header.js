import React from 'react';
import '../styles/Header.css';
import {BsChevronCompactDown} from 'react-icons/bs'
import dan_cristian_unsplash from '../style-images/dan_cristian_unsplash.jpg'
import {Link} from 'react-router-dom'


function Header() {
    return (
       <section id='header'>
            <div className='header-container'>
               <div className='header-left'>
                <h1>
                    <span>Absorb</span>
                    <span>Independent Art Shop</span>
                </h1>
                <p>Explore original art by emerging artists</p>
                <div className='header-btn'>
                    <Link to='/artwork/new'>Submit Your Art</Link>
                </div>
               </div>
               <div className='header-right'>
                    <img src={dan_cristian_unsplash} />
               </div>
               <div className='down-arrow'>
                <a href='#'>
                    <BsChevronCompactDown size={35} className='downbtn'/>
                </a>
            </div>
            </div>
       </section>
    )
}
export default Header