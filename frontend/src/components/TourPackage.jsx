import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './TourPackage.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Newsletter from './Newsletter';
import { CiClock2 } from 'react-icons/ci';

const Tabs = ({ tour }) => {
  const [activeTab, setActiveTab] = useState('information');

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return (
          <div>
            <h2>Overview</h2>
            <p>{tour.overview || 'No overview available.'}</p>
            <h2>Highlight</h2>
            {(tour.highlights || []).map((highlight, index) => (
              <p key={index}>{highlight}</p>
            ))}
            <table>
              <tbody>
                <tr>
                  <th>Destination</th>
                  <td>{tour.destination || 'N/A'}</td>
                </tr>
                <tr>
                  <th>Departure</th>
                  <td>{tour.departure || 'N/A'}</td>
                </tr>
                <tr>
                  <th>Departure Time</th>
                  <td>{tour.departure_time || 'N/A'}</td>
                </tr>
                <tr>
                  <th>Return Time</th>
                  <td>{tour.return_time || 'N/A'}</td>
                </tr>
                <tr>
                  <th>Included</th>
                  <td>
                    <ul>
                      {(tour.included || []).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Excluded</th>
                  <td>
                    <ul>
                      {(tour.excluded || []).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'travelPlan':
        return (
          <div>
            <h2>Travel Plan</h2>
            {(tour.travel_plan || []).map((day, index) => (
              <div key={index}>
                <h3>{day.title || 'No title'}</h3>
                <p>{day.time || 'No time specified'}</p>
                <p>{day.description || 'No description available'}</p>
                <ul>
                  {(day.details || []).map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'gallery':
        return (
          <div>
            <h2>Gallery</h2>
            {(tour.gallery || []).map((image, index) => (
              <img key={index} src={image} alt={`gallery-${index}`} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button className={activeTab === 'information' ? 'active' : ''} onClick={() => setActiveTab('information')}>Information</button>
        <button className={activeTab === 'travelPlan' ? 'active' : ''} onClick={() => setActiveTab('travelPlan')}>Travel Plan</button>
        <button className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}>Gallery</button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

function TourPackage() {
  const location = useLocation();
  const { tour } = location.state || {}; // Default to an empty object if state is undefined

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <div className="package_container">
      <div className="package-sect">
        <p className="banner-title">Tour Package Details</p>
      </div>

      <div className="package_sides">
        <div className="rt_package">
          <div className="image-holder">
            <img src={`http://localhost:8080/${tour.image_preview }`} alt={tour.destination_name} className="img-package" />
          </div>
          <p>{tour.destination_name}</p>
          <p>{tour.title || 'No title'}</p>          
          <hr style={{ margin: '20px 0', backgroundColor: '#ccc', border: 'none', height: '1px' }} />

          <div className="info-breaker">
            <div className="package-icons">
              <CiClock2 />
              <p>Duration</p>
              <p>{tour.duration} days</p>
            </div>
            <div className="package-icons">
              <CiClock2 />
              <p>Price</p>
              <p>${tour.price}</p>
            </div>
            <div className="package-icons">
              <CiClock2 />
              <p>Rating</p>
              <p>{tour.rating || 'N/A'}</p>
            </div>
            <div className="package-icons">
              <CiClock2 />
              <p>Category</p>
              <p>{tour.category || 'N/A'}</p>
            </div>
          </div>

          <hr style={{ margin: '20px 0', backgroundColor: '#ccc', border: 'none', height: '1px' }} />

          <Tabs tour={tour} />
        </div>

        <div className="lt_package">
          <p>Book this package</p>
          <div className="booking-inputs">
            <input type="text" name="fullname" placeholder="Your Full Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <input type="tel" name="tel" placeholder="Phone" />
            <input type="text" name="ticket" placeholder="Ticket Type" />
            <input type="number" name="adult" placeholder="Adult" />
            <input type="number" name="child" placeholder="Child" />
            <input type="date" name="date" placeholder="dd/mm/yyyy" />
            <textarea name="message" placeholder="Message" style={{ height: "10rem", textAlign: "start", resize: "vertical" }} rows={10} />
            <button type="button">Book now</button>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default TourPackage;
