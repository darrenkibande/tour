import React, { useEffect, useState } from 'react';
import './Tours.css';
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Newsletter from './Newsletter';

function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    async function fetchTours() {
      try {
        const response = await fetch('http://localhost:8080/tours');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    }

    fetchTours();
  }, []);

  return (
    <div className="tour-container">
      <div className="tour-sect">
        <p className="banner-title">Tour List</p>
      </div>

      <div className="tour-titles">
        <p className='title-primary'>Choose Your Package</p>
        <p className='title-secondary'>Select Your Best Package For Your Travel</p>
      </div>

      <div className="card-container">
        {tours.map(tour => (
          <div key={tour.id} className="card">
            <img src={`http://localhost:8080/${tour.image_preview}`} alt={tour.destination_name} className="card__image" />
            <div className="card__info">
              <h3 className="card__title">
                <IoLocationOutline className='icon__tour' />
                {tour.destination_name}
              </h3>
              <p className="card__text">${tour.price}<span>/Per Person</span></p>
              <p className='txt_cont'>{tour.description}</p>
              <div className="card__details">
                <p className="card__detail">100 Superb</p>
                <p className="card__detail">
                  <FaRegCalendarAlt className='icon__tour' />
                  {tour.duration} Days/ {tour.duration + 1} nights
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Newsletter/>
    </div>
  );
}

export default Tours;
