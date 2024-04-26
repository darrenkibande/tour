import React from 'react';
import './Destinations.css';


function Destinations() {
  

  return (
    <div className="dest-container">    
      <div className="banner-dest">
        <div className="banner-sect">
          <p className='banner-title'>Destination List</p>
        </div>    
      </div>

      <div className="dest-content">
        <p className='title_h1'> <b>Amazing</b> Tours and Fun <br /> Adventures <b>waiting for you.</b></p>
        <p className='txt_cont' style={{fontSize:'0.9em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam blanditiis earum modi maiores excepturi, cumque magnam error nulla dignissimos quae perspiciatis quis voluptates facere quaerat quod cum aut minima.</p>
      </div>
   
      {/* Render destination boxes */}
      <div className="dest_box">
        
          <div className="dest_gallery" >
            {/* <img src={destination.image_url} alt="" className='img_gal' /> */}
            <div className="in-img">
              <p className='in-float-img'></p>
            </div>
          </div>
        
      </div>  
      </div> 
     
  );
}

export default Destinations;
