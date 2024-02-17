import React from 'react'
import './Gallery.css'
import pic1 from '../assets/sutirta-budiman-Jgiv1rSIpVM-unsplash.jpg'

function Gallery() {
  return (
    <div className="gallery_container">
        <div className="lt_side">
           <img src={pic1} alt="" />
        </div>

        <div className="rt_side">
          <div className="sm_img">
            <img src="" alt="" />
          </div>
          <div className="sm_img">
            <img src="" alt="" />
          </div>
          <div className="sm_img">
            <img src="" alt="" />
          </div>
          <div className="sm_img">
            <img src="" alt="" /></div>           
        </div>
    </div>
  )
}

export default Gallery