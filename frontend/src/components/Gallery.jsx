import React from 'react'
import './Gallery.css'
// import pic1 from '../assets/sutirta-budiman-Jgiv1rSIpVM-unsplash.jpg'
import pic2 from '../assets/ammie-ngo-vcu-OZBxxRk-unsplash.jpg'
import pic3 from '../assets/elizeu-dias-SEq9dyZSe6c-unsplash.jpg'

function Gallery() {
  return (
    <div className="gallery_container">

      <div className="gallery-title">
        <p className='title_h1'>Featured Tours</p>
        <p className='div-title'>Beautiful Places Around The World </p>
      </div>

      <div className="img-dom">

        <div className="lt_side">         
          <div className="img-container">
            <img src={pic2} alt="" className='img_gal'/>
            <div className="in-img">
              <p className='in-float-img'>Discover Africa</p>
            </div>
          </div>
        </div>

        <div className="rt_side">
          <div className="sm_img">
            <div className="img-container">
              <img src={pic2} alt="" className='img_gal' />
              <div className="in-img">
                <p className='in-float-img'>Image Description</p>
              </div>
            </div>
          </div>
          <div className="sm_img">
            <div className="img-container">
              <img src={pic3} alt="" className='img_gal' />
              <div className="in-img">
                <p className='in-float-img'>Image Description</p>
              </div>
            </div>
          </div>
          <div className="sm_img">
            <div className="img-container">
              <img src={pic3} alt="" className='img_gal' />
              <div className="in-img">
                <p className='in-float-img'>Image Description</p>
              </div>
            </div>
          </div>
          <div className="sm_img">
            <div className="img-container">
              <img src={pic3} alt="" className='img_gal' />
              <div className="in-img">
                <p className='in-float-img'>Image Description</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Gallery;
