import React from 'react';
import './Newsletter.css'

function Newsletter() {
  return (
    <form className="news-form">
      <span className="news-title">Subscribe to our newsletter.</span>
      <p className="description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, tenetur.
        </p>
      <div>
        <input placeholder="Enter your email" type="email" name="email" id="email-address" />
        <button className='btn' type="submit">Subscribe</button>
      </div>
    </form>
  );
}

export default Newsletter;