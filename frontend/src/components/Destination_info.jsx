import React from 'react'
import { useLocation } from 'react-router-dom';
import './Destination_info.css'

function Destination_info() {
  const location = useLocation();
  const { destination } = location.state;

  return (
    <div>
      <h1>{destination.destination_name}</h1>
      <img src={`http://localhost:8080/${destination.image_preview}`} alt={destination.destination_name} />
      <p>{destination.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default Destination_info

