import React from 'react'

import { SiYourtraveldottv } from "react-icons/si";
import { LuShoppingCart } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">      
      <p className='logo-title'> <SiYourtraveldottv className="nav-icon"/>  CHASLYM TOURS</p>
      </div>

      <div className="nav-links">
        <ul className='ul-links'>
        <li>Home</li>
        <li>Pages</li>
        <li>Destinations</li>
        <li>Tours</li>
        <li>Blog</li>
        </ul>
      </div>

      <div className="nav-icons">
        <ul className='nav-links'>
        <li> <LuShoppingCart className="nav-icon"/></li>
        <li> <VscAccount className="nav-icon"/></li>
        </ul>     
     
      </div>
    </div>
  )
}

export default Navbar