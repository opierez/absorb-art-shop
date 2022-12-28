import React from 'react';
import '../styles/Header.css';
import mercury_and_psyche from '../style-images/mercury_and_psyche.jpeg'
import {BsChevronCompactDown} from 'react-icons/bs'
function Header() {
    return (
       <section id='header'>
            <div className='header-container'>
               <div className='header-left'>
                <h1>
                    <span>Company Name</span>
                    <span>Tagline</span>
                </h1>
                <p>Mission Statement</p>
                <div className='header-btn'>
                    <a href='#'>Support Local Artists</a>
                    <a href='#'>Submit Your Artwork</a>
                </div>
               </div>
               <div className='header-right'>
                    <img src={mercury_and_psyche} />
               </div>
            </div>
            <div className='down-arrow'>
                <a href='#'>
                    <BsChevronCompactDown size={35} className='downbtn'/>
                </a>
            </div>
       </section>
    )
}
export default Header