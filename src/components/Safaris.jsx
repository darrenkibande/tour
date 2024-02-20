import React from 'react'
import './Safaris.css'

import pic1 from '../assets/elizeu-dias-SEq9dyZSe6c-unsplash.jpg'

function Safaris() {
  return (
   <div className="safari_container">
    <div className="safari_title">
        <p>Explore the World for Yourself</p>
    </div>

    <div className="safari_box">
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