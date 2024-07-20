import React, { useState, useEffect } from 'react';
import './AdminTour.css';

function AdminTour() {
  const [formData, setFormData] = useState({
    destination_title: '',
    destination_name: '',
    description: '',
    duration: '',
    price: '',
    image_preview: null,
    info_overview: '',
    info_highlight: '',
    departure: '',
    departure_date: '',
    return_date: '',
    included: '',
    excluded: '',
    travel_plan_overview: '',
    travel_plan_day_title: '',
    travel_plan_time: '',
    travel_plan_day_description: ''
  });
  
  const [currentTab, setCurrentTab] = useState(1);

  useEffect(() => {
    // Reset form data when the component mounts
    setFormData({
      destination_title: '',
      destination_name: '',
      description: '',
      duration: '',
      price: '',
      image_preview: null,
      info_overview: '',
      info_highlight: '',
      departure: '',
      departure_date: '',
      return_date: '',
      included: '',
      excluded: '',
      travel_plan_overview: '',
      travel_plan_day_title: '',
      travel_plan_time: '',
      travel_plan_day_description: ''
    });
  }, []);

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
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

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
        destination_title: '',
        destination_name: '',
        description: '',
        duration: '',
        price: '',
        image_preview: null,
        info_overview: '',
        info_highlight: '',
        departure: '',
        departure_date: '',
        return_date: '',
        included: '',
        excluded: '',
        travel_plan_overview: '',
        travel_plan_day_title: '',
        travel_plan_time: '',
        travel_plan_day_description: ''
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
      <div className="tabs">
        <button onClick={() => setCurrentTab(1)} className={currentTab === 1 ? 'active' : ''}>Tab 1</button>
        <button onClick={() => setCurrentTab(2)} className={currentTab === 2 ? 'active' : ''}>Tab 2</button>
      </div>
      <form onSubmit={handleSubmit}>
        {currentTab === 1 && (
          <div className="tab-content">
            <input type="text" name="destination_title" placeholder="Destination Title" value={formData.destination_title} onChange={handleChange} required />
            <input type="text" name="destination_name" placeholder="Destination Name" value={formData.destination_name} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
            <input type="number" name="duration" placeholder="Duration (in days)" value={formData.duration} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
            <input type="file" name="image_preview" onChange={handleImageChange} required accept="image/*" />
          </div>
        )}
        {currentTab === 2 && (
          <div className="tab-content">
            <textarea name="info_overview" placeholder="Info Overview" value={formData.info_overview} onChange={handleChange} />
            <textarea name="info_highlight" placeholder="Info Highlight" value={formData.info_highlight} onChange={handleChange} />
            <input type="text" name="departure" placeholder="Departure" value={formData.departure} onChange={handleChange} />
            <input type="date" name="departure_date" placeholder="Departure Date" value={formData.departure_date} onChange={handleChange} />
            <input type="date" name="return_date" placeholder="Return Date" value={formData.return_date} onChange={handleChange} />
            <textarea name="included" placeholder="Included" value={formData.included} onChange={handleChange} />
            <textarea name="excluded" placeholder="Excluded" value={formData.excluded} onChange={handleChange} />
            <textarea name="travel_plan_overview" placeholder="Travel Plan Overview" value={formData.travel_plan_overview} onChange={handleChange} />
            <input type="text" name="travel_plan_day_title" placeholder="Travel Plan Day Title" value={formData.travel_plan_day_title} onChange={handleChange} />
            <input type="text" name="travel_plan_time" placeholder="Travel Plan Time" value={formData.travel_plan_time} onChange={handleChange} />
            <textarea name="travel_plan_day_description" placeholder="Travel Plan Day Description" value={formData.travel_plan_day_description} onChange={handleChange} />
            <button type="submit">Upload</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default AdminTour;
