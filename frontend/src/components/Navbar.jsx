import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

// import { SiYourtraveldottv } from "react-icons/si";
import { LuShoppingCart } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">      
      <Link className='li-links' to='/Home'><p className='logo-title'>CHASLYM TOURS</p></Link>
      </div>

      <div className="nav-links">
        <ul className='ul-links'>
       <Link className='li-links' to='/Home'> <li >Home</li> </Link> 
        <Link className='li-links'><li className='drop-menu'>Pages
        <ul className='dropdown'>
          <Link className='li-links' to='/About us'><li>About Us</li></Link>
          <Link className='li-links' to='/What we offer'><li>What We Offer</li></Link>
          {/* <Link className='li-links' to='/Our team'><li>Our Team</li></Link> */}
          <Link className='li-links' to='/Contact us'><li>Contact Us</li></Link>
          <Link className='li-links' to='/Faq'><li>FAQ Page</li></Link>
        </ul>
        </li></Link>
        <Link className='li-links' to='/destinations'><li>Destinations</li></Link>
        <Link className='li-links'to='/Tours'><li>Tour Package</li></Link>
        <Link className='li-links'to='/Blogs'><li>Blog</li></Link>
        </ul>
      </div>

      <div className="nav-icons">
        <ul className='ul-links'>
        <Link className='li-links'><li> <LuShoppingCart className="nav-icon"/></li></Link>
        <Link className='li-links' to='/Register'><li> <VscAccount className="nav-icon"/></li></Link>
        </ul>     
     
      </div>
    </div>
  )
}

export default Navbar