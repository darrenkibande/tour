import React, { useState,useEffect } from 'react';
import './TourPackage.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Newsletter from './Newsletter';
import { CiClock2 } from 'react-icons/ci';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('information');

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <div>
        <h2>Overview</h2>
        <p>
          Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus. In non enim libero. Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>
        <h2>Highlight</h2>
        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
        <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
        <table>
          <tbody>
            <tr>
              <th>Destination</th>
              <td>New York City</td>
            </tr>
            <tr>
              <th>Depature</th>
              <td>Yes Required</td>
            </tr>
            <tr>
              <th>Departure Time</th>
              <td>01 April, 2021 10.00AM</td>
            </tr>
            <tr>
              <th>Return Time</th>
              <td>08 April, 2021 10.00AM</td>
            </tr>
            <tr>
              <th>Included</th>
              <td>
                <ul>
                  <li>Specialized Bilingual Guide</li>
                  <li>Private Transport</li>
                  <li>Entrance Fees</li>
                  <li>Box Lunch, Water, Dinner and Snacks</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Excluded</th>
              <td>
                <ul>
                  <li>Additional Services</li>
                  <li>Insurance</li>
                  <li>Drink</li>
                  <li>Tickets</li>
                  <li>Travel With Bus</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>;
      case 'travelPlan':
        return  <div>
        <h2>Overview</h2>
        <p>
          Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus.
        </p>
        <h3>01 DAY 1 : Departure And Small Tour</h3>
        <p>10.00 AM to 10.00 PM</p>
        <p>
          Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.
        </p>
        <ul>
          <li>Specialized Bilingual Guide</li>
          <li>Private Transport</li>
          <li>Entrance Fees</li>
          <li>Box Lunch, Water, Dinner and Snacks</li>
        </ul>
        <h3>02 DAY 2 : Departure And Small Tour</h3>
        <p>10.00 AM to 10.00 PM</p>
        <p>
          Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.
        </p>
        <ul>
          <li>Specialized Bilingual Guide</li>
          <li>Private Transport</li>
          <li>Entrance Fees</li>
          <li>Box Lunch, Water, Dinner and Snacks</li>
        </ul>
        <h3>03 DAY 3 : Departure And Small Tour</h3>
        <p>10.00 AM to 10.00 PM</p>
        <p>
          Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.
        </p>
        <ul>
          <li>Specialized Bilingual Guide</li>
          <li>Private Transport</li>
          <li>Entrance Fees</li>
          <li>Box Lunch, Water, Dinner and Snacks</li>
        </ul>
        <h3>04 DAY 4 : Departure And Small Tour</h3>
        <p>10.00 AM to 10.00 PM</p>
        <p>
          Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.
        </p>
        <ul>
          <li>Specialized Bilingual Guide</li>
          <li>Private Transport</li>
          <li>Entrance Fees</li>
          <li>Box Lunch, Water, Dinner and Snacks</li>
        </ul>
        <h3>05 DAY 5 : Departure And Small Tour</h3>
        <p>10.00 AM to 10.00 PM</p>
        <p>
          Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.
        </p>
        <ul>
          <li>Specialized Bilingual Guide</li>
          <li>Private Transport</li>
          <li>Entrance Fees</li>
          <li>Box Lunch, Water, Dinner and Snacks</li>
        </ul>
      </div>;
      case 'gallery':
        return <div>
        
      </div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 'information' ? 'active' : ''}
          onClick={() => setActiveTab('information')}
        >
          Information
        </button>
        <button
          className={activeTab === 'travelPlan' ? 'active' : ''}
          onClick={() => setActiveTab('travelPlan')}
        >
          Travel Plan
        </button>
        <button
          className={activeTab === 'gallery' ? 'active' : ''}
          onClick={() => setActiveTab('gallery')}
        >
          Gallery
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

function TourPackage() {

  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="package_container">
      <div className="package-sect">
        <p className="banner-title">Tour Package Details</p>
      </div>

      <div className="package_sides">
        <div className="rt_package">
          <div className="image-holder">
            <img src="" alt="" className="img-package" />
          </div>
          <p>Western Express Northbound</p>
          <p>Mount Dtna, Spain</p>
          <hr
            style={{
              margin: '20px 0',
              backgroundColor: '#ccc',
              border: 'none',
              height: '1px',
            }}
          />

          <div className="info-breaker">
            <div className="package-icons">
              <CiClock2 />
              <p>Duration</p>
              <p>14 days</p>
            </div>
            <div className="package-icons">
              <CiClock2 />
              <p>Duration</p>
              <p>14 days</p>
            </div>
            <div className="package-icons">
              <CiClock2 />
              <p>Duration</p>
              <p>14 days</p>
            </div>
            <div className="package-icons">
              <CiClock2 />
              <p>Duration</p>
              <p>14 days</p>
            </div>
          </div>

          <hr
            style={{
              margin: '20px 0',
              backgroundColor: '#ccc',
              border: 'none',
              height: '1px',
            }}
          />

          <Tabs />
        </div>

        <div className="lt_package">
          <p>Book this package</p>
          <div className="booking-inputs">
            <input
              type="text"
              name="fullname"
              placeholder="Your Full Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <input
              type="tel"
              name="tel"
              placeholder="Phone"
            />
            <input
              type="text"
              name="ticket"
              placeholder="Ticket Type"
            />
            <input
              type="number"
              name="adult"
              placeholder="Adult"
            />
            <input
              type="number"
              name="child"
              placeholder="Child"
            />
            <input
              type="date"
              name="date"
              placeholder="dd/mm/yyyy"
            />
           <textarea
  name="message"
  placeholder="Message"
  style={{ height: "10rem", textAlign: "start", resize: "vertical" }}
  rows={10}
/>

            <button type="button">Book now</button>
          </div>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
}

export default TourPackage;
