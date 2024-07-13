import React, { useState, useEffect } from 'react';
import './AdminDestination.css';

function Admin_destination() {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    destination_name: '',
    destination_title1: '',
    description1: '',
    destination_title2: '',
    description2: '',
    image_preview: null,
    image1: null,
    image2: null,
    image3: null
  });

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
  }, []); // Empty dependency array to fetch data once on component mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadData = new FormData();
    uploadData.append('destination_name', formData.destination_name);
    uploadData.append('destination_title1', formData.destination_title1);
    uploadData.append('description1', formData.description1);
    uploadData.append('destination_title2', formData.destination_title2);
    uploadData.append('description2', formData.description2);
    uploadData.append('image_preview', formData.image_preview);
    uploadData.append('image1', formData.image1);
    uploadData.append('image2', formData.image2);
    uploadData.append('image3', formData.image3);

    try {
      const response = await fetch('http://localhost:8080/destinations', {
        method: 'POST',
        body: uploadData
      });
      if (!response.ok) {
        throw new Error('Failed to upload destination');
      }
      const newDestination = await response.json();
      setDestinations([...destinations, newDestination]);
    } catch (error) {
      console.error('Error uploading destination:', error);
    }
  };

  return (
    <div className="dest-container">
      {/* Upload form */}
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="text"
          name="destination_name"
          value={formData.destination_name}
          onChange={handleInputChange}
          placeholder="Destination Name"
          required
        />
        <input
          type="text"
          name="destination_title1"
          value={formData.destination_title1}
          onChange={handleInputChange}
          placeholder="Destination Title 1"
          required
        />
        <textarea
          name="description1"
          value={formData.description1}
          onChange={handleInputChange}
          placeholder="Description 1"
          required
        ></textarea>
        <input
          type="text"
          name="destination_title2"
          value={formData.destination_title2}
          onChange={handleInputChange}
          placeholder="Destination Title 2"
          required
        />
        <textarea
          name="description2"
          value={formData.description2}
          onChange={handleInputChange}
          placeholder="Description 2"
          required
        ></textarea>
        <input
          type="file"
          name="image_preview"
          onChange={handleFileChange}
          required
        />
        <input
          type="file"
          name="image1"
          onChange={handleFileChange}
          required
        />
        <input
          type="file"
          name="image2"
          onChange={handleFileChange}
          required
        />
        <input
          type="file"
          name="image3"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Upload Destination</button>
      </form>
    </div>
  );
}

export default Admin_destination;

