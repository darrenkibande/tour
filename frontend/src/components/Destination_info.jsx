import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Destination_info.css';

function Destination_info() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || null);
  const [loading, setLoading] = useState(!destination);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!destination) {
      const fetchDestination = async () => {
        try {
          const response = await fetch('http://localhost:8080/destinations'); // Update with your endpoint
          if (!response.ok) {
            throw new Error('Failed to fetch destination details');
          }
          const data = await response.json();
          setDestination(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchDestination();
    }
  }, [destination]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!destination) {
    return <div>No destination details available.</div>;
  }

  return (
    <div className='destinfo-container'>
      <div className="banner-destinfo">
        <img 
          src={`http://localhost:8080/${destination.image_preview}`} 
          alt={destination.destination_name} 
          className='destinfo-img' 
        />
        <div className="banner-sectinfo">
          <p className='bannerinfo-title'>{destination.destination_name}</p>
        </div>
      </div>

      <div className="destinfo-content">
        <p>{destination.destination_title1}</p>
        <p>{destination.description1}</p>

        <div className="destinfo_box">       
          <div className="destinfo_gallery" key={destination.destination_id} >
            <img src={`http://localhost:8080/${destination.image1}`} alt={destination.destination_name} className='dest_img' />
            <img src={`http://localhost:8080/${destination.image2}`} alt={destination.destination_name} className='dest_img' />
            <img src={`http://localhost:8080/${destination.image3}`} alt={destination.destination_name} className='dest_img' />

          </div>      
      </div>

      <p>{destination.destination_title2}</p>
      <p>{destination.description2}</p>

      </div>
    </div>
  );
}

export default Destination_info;
