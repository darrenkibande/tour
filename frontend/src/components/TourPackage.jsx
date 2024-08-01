import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './TourPackage.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Newsletter from './Newsletter';
import { CiClock2 } from 'react-icons/ci';
import { IoPricetagsOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const Tabs = ({ tour }) => {
  const [activeTab, setActiveTab] = useState('information');

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return (
          <div>
            <h2>Overview</h2>
            <p>{tour.overview}</p>
            <h2>Highlight</h2>
            {Array.isArray(tour.highlights) && tour.highlights.length > 0 ? (
              tour.highlights.map((highlight, index) => (
                <p key={index}>{highlight}</p>
              ))
            ) : (
              <p>No highlights available</p>
            )}
            <table>
              <tbody>
                <tr>
                  <th>Destination</th>
                  <td>{tour.destination}</td>
                </tr>
                <tr>
                  <th>Departure</th>
                  <td>{tour.departure}</td>
                </tr>
                <tr>
                  <th>Departure Time</th>
                  <td>{tour.departure_time}</td>
                </tr>
                <tr>
                  <th>Return Time</th>
                  <td>{tour.return_time}</td>
                </tr>
                <tr>
                  <th>Included</th>
                  <td>
                    <ul>
                      {Array.isArray(tour.included) && tour.included.length > 0 ? (
                        tour.included.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>No items included</li>
                      )}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Excluded</th>
                  <td>
                    <ul>
                      {Array.isArray(tour.excluded) && tour.excluded.length > 0 ? (
                        tour.excluded.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>No items excluded</li>
                      )}
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
            {Array.isArray(tour.travel_plan) && tour.travel_plan.length > 0 ? (
              tour.travel_plan.map((day, index) => (
                <div key={index}>
                  <h3>{day.title}</h3>
                  <p>{day.time}</p>
                  <p>{day.description}</p>
                  <ul>
                    {Array.isArray(day.details) && day.details.length > 0 ? (
                      day.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))
                    ) : (
                      <li>No details available</li>
                    )}
                  </ul>
                </div>
              ))
            ) : (
              <p>No travel plan available</p>
            )}
          </div>
        );
      case 'gallery':
        return (
          <div>
            <h2>Gallery</h2>
            {Array.isArray(tour.gallery) && tour.gallery.length > 0 ? (
              tour.gallery.map((image, index) => (
                <img key={index} src={image} alt={`gallery-${index}`} />
              ))
            ) : (
              <p>No images available</p>
            )}
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
            <img src={`http://localhost:8080/${tour.image_preview}`} alt={tour.destination_name} className="img-package" />
          </div>
          <div className="package-titles">
            <p>{tour.destination_name}</p>
            <p>{tour.title}</p>
          </div>
                    
          <hr style={{ margin: '20px 0', backgroundColor: '#ccc', border: 'none', height: '1px' }} />

          <div className="info-breaker">
            <div className="package-icons">
              <CiClock2 className='icon-package'/>
              <div>
                <p className='title-primary' style={{fontSize:"18px"}}>Duration</p>
                <p className='txt_p'>{tour.duration} days</p>
              </div>
            </div>
            <div className="package-icons">
              <IoPricetagsOutline className='icon-package'/>
              <div>
                <p className='title-primary' style={{fontSize:"18px"}}>Price</p>
                <p className='txt_p'>${tour.price}</p>
              </div>
            </div>
            <div className="package-icons">
              <CiStar className='icon-package'/>
              <div>
                <p className='title-primary' style={{fontSize:"18px"}}>Rating</p>
                <p className='txt_p'>8K+ </p>
              </div>
            </div>
            <div className="package-icons">
              <IoPersonOutline className='icon-package'/>
              <div>
                <p className='title-primary' style={{fontSize:"18px"}}>Age</p>
                <p className='txt_p'>2+</p>
              </div>
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
