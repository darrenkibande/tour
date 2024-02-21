import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

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
       <Link className='li-links' to='/home'> <li >Home</li> </Link> 
        <Link className='li-links'><li>Pages
        {/* <ul>
          <li>About us</li>
          <li>What we offer</li>
          <li>Our team</li>
          <li>Contact us</li>
        </ul> */}
        </li></Link>
        <Link className='li-links'><li>Destinations</li></Link>
        <Link className='li-links'><li>Tours</li></Link>
        <Link className='li-links'><li>Blog</li></Link>
        </ul>
      </div>

      <div className="nav-icons">
        <ul className='ul-links'>
        <Link className='li-links'><li> <LuShoppingCart className="nav-icon"/></li></Link>
        <Link className='li-links'><li> <VscAccount className="nav-icon"/></li></Link>
        </ul>     
     
      </div>
    </div>
  )
}

export default Navbar