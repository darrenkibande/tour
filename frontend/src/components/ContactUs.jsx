import React, { useState,useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './ContactUS.css'
import Newsletter from './Newsletter';

function ContactUS() {

  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add validation logic here
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompanyName('');
    setMessage('');
    setNameError('');
    setEmailError('');
  };

  return (
    <div className="contact-container">

    <div className="banner-dest">
      <div className="banner-sect">
      <p className='banner-title'>Contact Us</p>
      </div>    
    </div>

      <div data-aos="zoom-in" className="wrapper">
        <div className="form">
          <h4>GET IN TOUCH</h4>
          <h2 className="form-headline">Send us a message</h2>
          <form id="submit-form" onSubmit={handleSubmit}>
            <p>
              <input
                id="name"
                className="form-input"
                type="text"
                placeholder="Your Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <small className="name-error">{nameError}</small>
            </p>
            <p>
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="Your Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small className="email-error">{emailError}</small>
            </p>
            <p className="full-width">
              <input
                id="company-name"
                className="form-input"
                type="text"
                placeholder="Company Name*"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
              <small></small>
            </p>
            <p className="full-width">
              <textarea
                minLength="20"
                id="message"
                cols="30"
                rows="7"
                placeholder="Your Message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <small></small>
            </p>
            <p className="full-width">
              <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive
              communications by call / email about Company's services.
            </p>
            <p className="full-width">
              <input type="submit" className="submit-btn" value="Submit" />
              <button className="reset-btn" type="button" onClick={handleReset}>
                Reset
              </button>
            </p>
          </form>
        </div>

        <div className="contacts contact-wrapper">
          <ul>
            <li>
              We've driven online revenues of over <span className="highlight-text-grey">$2 billion</span> for our
              clients. Ready to know how we can help you?
            </li>
            <span className="highlight-contact-info">
              <li className="email-info">
                <i className="fa fa-envelope" aria-hidden="true"></i> info@demo.com
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>{' '}
                <span className="highlight-text">+91 11 1111 2900</span>
              </li>
            </span>
          </ul>
        </div>
      </div>

      <div data-aos="zoom-in" className="map">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8421.451122451923!2d34.76540190977022!3d-0.14584628984489334!2m3!1f0!2f38.00119298563272!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x182aa437ad4ac81d%3A0x2012a439d6248dd2!2sKisumu!5e1!3m2!1sen!2ske!4v1712993804995!5m2!1sen!2ske" 
      width="100%"
      height="600"
      title='Chasylm Tours Ltd Location'
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">

      </iframe>
      </div>
      <Newsletter/>
    </div>
  );
}

export default ContactUS;
