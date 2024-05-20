import React, { useState, useEffect } from 'react';
import './Destinations.css';

function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:8080/destinations');
        if (!response.ok) {
          throw new Error('Failed to fetch destinations');
        }
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

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

      <div className="dest_box">
        {destinations.map(destination => (
          <div className="dest_gallery" key={destination.destination_id}>
            <img src={`http://localhost:8080/${destination.image_preview}`} alt={destination.destination_name} className='img_gal' />
            <div className="in-img">
              <p className='in-float-img'>{destination.destination_name}</p>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
}

export default Destinations;
