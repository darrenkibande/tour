import React from 'react'
import './Navbar.css'
import { SiYourtraveldottv } from "react-icons/si";
import { LuShoppingCart } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">      
      <p className='logo-title'> <SiYourtraveldottv className="nav-icon"/> CHASLYM TOURS</p>
      </div>

      <div className="nav-links">
        <ul className='ul-links'>
        <li className='li-links'>Home</li>
        <li className='li-links'>Pages</li>
        <li className='li-links'>Destinations</li>
        <li className='li-links'>Tours</li>
        <li className='li-links'>Blog</li>
        </ul>
      </div>

      <div className="nav-icons">
        <ul className='ul-links'>
        <li className='li-links'> <LuShoppingCart className="nav-icon"/></li>
        <li className='li-links'> <VscAccount className="nav-icon"/></li>
        </ul>     
     
      </div>
    </div>
  )
}

export default Navbar