import React from 'react'
import './Gallery.css'
import pic1 from '../assets/sutirta-budiman-Jgiv1rSIpVM-unsplash.jpg'
import pic2 from '../assets/ammie-ngo-vcu-OZBxxRk-unsplash.jpg'
import pic3 from '../assets/elizeu-dias-SEq9dyZSe6c-unsplash.jpg'

function Gallery() {
  return (
    <div className="gallery_container">
        <div className="lt_side">
           <img src={pic1} alt="" className='img_gal'/>
        </div>

        <div className="rt_side">
          <div className="sm_img">
            <img src={pic2} alt="" className='img_gal' />
          </div>
          <div className="sm_img">
            <img src={pic3} alt="" className='img_gal' />
          </div>
          <div className="sm_img">
            <img src={pic3} alt="" className='img_gal' />
          </div>
          <div className="sm_img">
            <img src={pic3} alt="" className='img_gal' /></div>           
        </div>
    </div>
  )
}

export default Gallery