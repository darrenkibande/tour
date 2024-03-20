import React from 'react'
import './ContactUs.css'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function ContactUs() {

    const inputs = document.querySelectorAll(".input");

    const focusFunc = (e) => {
      let parent = e.target.parentNode;
      parent.classList.add("focus");
    }
  
    const blurFunc = (e) => {
      let parent = e.target.parentNode;
      if (e.target.value === "") {
        parent.classList.remove("focus");
      }
    }
  
    React.useEffect(() => {
      inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
      });
  
      return () => {
        inputs.forEach((input) => {
          input.removeEventListener("focus", focusFunc);
          input.removeEventListener("blur", blurFunc);
        });
      };
    }, [inputs]);

  return (
    <div className="contact-container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="cont-form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              {/* <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;&nbsp; */}
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              {/* <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp; */}
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              {/* <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp; */}
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <Link>
                {/* <FontAwesomeIcon icon={faFacebookF} /> */}
              </Link>
              <Link>
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
              </Link>
              <Link>
                {/* <FontAwesomeIcon icon={faInstagram} /> */}
              </Link>
              <Link>
                {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
              </Link>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="contact-input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="contact-input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="contact-input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="contact-input" placeholder='Message'></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="contact-btn" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
