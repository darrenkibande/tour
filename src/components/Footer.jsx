import React from 'react'
import './Footer.css'
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  return (
   <div className="footer-container">
    <div className="ft-top">
    <div className="lt-side">
    <span>Chasylm tours</span>
    <p>
    Going on an adventure is not about just fun, its all about yourself and entertaining yourself. 
    Get the best out adventure activities in you and start living the moment.
    </p>
    <ul>
      <li><CiFacebook /></li>
      <li><FaXTwitter /></li>
      <li><CiLinkedin /></li>
      <li><FaInstagram /></li>
    </ul>
    </div>

    <div className="mid-side">
    <span>Useful links</span>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
    </div>

    <div className="rt-side">
    <span>Reach us</span>
    <ul>
      <li><FaPhone /></li>
      <li><MdOutlineMail /></li>
      <li><IoLocationOutline /></li>
    </ul>
    </div>

    </div>

    <div className="ft-bottom">
        <span>©2024 Chasylm Tours, All Rights Reserved</span>
    </div>
   </div>
  )
}

export default Footer