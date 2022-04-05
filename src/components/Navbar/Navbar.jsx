import React from 'react';
import logo from '../logo/whalesome0000.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
    <nav className='nav'>
        <div className='logo'>
            <img src={logo} alt="logo" id='img' />
            <div>
                <p className='logo_font'>WHALESOME</p>
                <p className='logo_font'>COMICS</p>
                <p className='logo_font'>NFT</p>
            </div>
        </div>
        
    </nav>
    </>
  )
}

export default Navbar