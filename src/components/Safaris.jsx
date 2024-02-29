import React from 'react'
import './Safaris.css'

import pic1 from '../assets/elizeu-dias-SEq9dyZSe6c-unsplash.jpg'

function Safaris() {
  return (
   <div className="safari_container">
    <div className="safari_title">
        <p className='div-title'>Explore The World For Yourself</p>
    </div>

    <div className="safari_box">
        <div className="saf_gal">
          <img src={pic1} alt="" className='img_gal'/>
          <div className="gal-cont">
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="saf_gal">
        <img src={pic1} alt="" className='img_gal'/>
        </div>
        <div className="saf_gal">
        <img src={pic1} alt="" className='img_gal'/> 
        </div>
        <div className="saf_gal">
        <img src={pic1} alt="" className='img_gal'/> 
        </div>
        <div className="saf_gal">
        <img src={pic1} alt="" className='img_gal'/> 
        </div>
        <div className="saf_gal">
        <img src={pic1} alt="" className='img_gal'/>   
        </div>
        <div className="saf_gal">
        <img src={pic1} alt="" className='img_gal'/>   
        </div>
        <div className="saf_gal">
        <img src={pic1} alt="" className='img_gal'/>  
        </div>
    </div>
   </div>
  )
}

export default Safaris