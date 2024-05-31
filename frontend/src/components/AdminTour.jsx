import React, { useState } from 'react';
import './AdminTour.css';

function AdminTour() {
  const [formData, setFormData] = useState({
    destination_name: '',
    description: '',
    duration: '',
    price: '',
    image_preview: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image_preview: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('destination_name', formData.destination_name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('duration', formData.duration);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('image_preview', formData.image_preview);

    try {
      const response = await fetch('http://localhost:8080/tours', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Error uploading tour data');
      }

      // Reset form data after successful upload
      setFormData({
        destination_name: '',
        description: '',
        duration: '',
        price: '',
        image_preview: null,
      });

      alert('Tour uploaded successfully!');
    } catch (error) {
      console.error('Error uploading tour data:', error);
      alert('Failed to upload tour data. Please try again.');
    }
  };

  return (
    <div className="upload-tour-container">
      <h2>Upload New Tour</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="destination_name" placeholder="Destination Name" value={formData.destination_name} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="number" name="duration" placeholder="Duration (in days)" value={formData.duration} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="file" name="image_preview" onChange={handleImageChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default AdminTour;
