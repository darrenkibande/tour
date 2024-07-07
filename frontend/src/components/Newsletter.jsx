import React, {useEffect} from 'react';
import './Newsletter.css'
import AOS from "aos";
import "aos/dist/aos.css";

function Newsletter() {

  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <form data-aos="zoom-in" className="news-form">
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