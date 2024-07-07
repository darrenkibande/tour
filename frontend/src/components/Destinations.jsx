import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Destinations.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Newsletter from './Newsletter';

function Destinations_info() {

  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);

  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

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

  const handleClick = (destination) => {
    navigate('/DestinationInfo', { state: { destination } });
  };

  return (
    <div className="destination-container">
      <div className="banner-dest">
        <div className="banner-sect">
          <p className='banner-title'>Destination List</p>
        </div>
      </div>

      <div className="dest-content">
        <p className='title-secondary'>Amazing Tours and Fun Adventures waiting for you.</p>
        <p className='txt_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam blanditiis earum modi maiores excepturi, cumque magnam error nulla dignissimos quae perspiciatis quis voluptates facere quaerat quod cum aut minima.</p>
      </div>

      <div className="dest_box">
        {destinations.map(destination => (
          <div className="dest_gallery" key={destination.destination_id} onClick={() => handleClick(destination)}>
            <img src={`http://localhost:8080/${destination.image_preview}`} alt={destination.destination_name} className='dest_img' />
            <div className="in-imgtxt">
              <p className='in-float-imgtxt'>{destination.destination_name}</p>
            </div>
          </div>
        ))}
      </div>
      <Newsletter/>
    </div>
  );
}

export default Destinations_info;
