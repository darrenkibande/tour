import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';

function Gallery() {
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

        // Shuffle the destinations array and select up to 5 random entries
        const shuffledDestinations = data.sort(() => 0.5 - Math.random());
        const selectedDestinations = shuffledDestinations.slice(0, 5);

        setDestinations(selectedDestinations);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();

    const interval = setInterval(() => {
      fetchDestinations();
    }, 6000); // Fetch new data every 60 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClick = (destination) => {
    navigate('/DestinationInfo', { state: { destination } });
  };

  return (
    <div className="gallery_container">
      <div className="gallery-title">
        <p className='title-primary'>Featured Destinations</p>
        <p className='title-secondary'>Beautiful Places Around The World</p>
      </div>

      <div className="img-dom">
        {destinations.slice(0, 1).map(destination => (
          <div className="lt_side" key={destination.destination_id}>
            <div className="img-container" onClick={() => handleClick(destination)}>
              <img src={`http://localhost:8080/${destination.image_preview}`} alt={destination.destination_name} className='img_gal_full' />
              <div className="in-img">
                <p className='in-float-img'>{destination.destination_name}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="rt_side">
          {destinations.slice(1).map(destination => (
            <div className="sm_img" key={destination.destination_id}>
              <div className="img-container" onClick={() => handleClick(destination)}>
                <img src={`http://localhost:8080/${destination.image_preview}`} alt={destination.destination_name} className='img_gal' />
                <div className="in-img">
                  <p className='in-float-img'>{destination.destination_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
