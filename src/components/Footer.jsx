import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
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
    <span className='ft-txt'>Chasylm tours</span>
    <p className='ft-txt'>
    Going on an adventure is not about just fun, its all about yourself and entertaining yourself. 
    Get the best out adventure activities in you and start living the moment.
    </p>
    <ul className='ftlinks'>
      <Link className='li-ftlinks'><li><CiFacebook className='icon-oth'/></li></Link>
      <Link className='li-ftlinks'><li><FaXTwitter className='icon-oth'/></li></Link>
      <Link className='li-ftlinks'><li><CiLinkedin className='icon-oth'/></li></Link>
      <Link className='li-ftlinks'><li><FaInstagram className='icon-oth'/></li></Link>
    </ul>
    </div>

    <div className="mid-side">
    <span className='ft-txt'>Useful links</span>
    <ul className='ul-ftlinks'>
      <Link className='li-ftlinks' to='/Home'><li>Home</li></Link>
      <Link className='li-ftlinks' to='/About us'><li>About</li></Link>
      <Link className='li-ftlinks' to='/Blogs'><li>Blog</li></Link>
      <Link className='li-ftlinks' to='/Contact us'><li>Contact</li></Link>
    </ul>
    </div>

    <div className="rt-side">
    <span className='ft-txt'>Reach us</span>
    <ul className='ul-ftlinks'>
      <li className='li-ftlinks'><FaPhone className='icon-oth'/> +2547466678</li>
      <li className='li-ftlinks'><MdOutlineMail className='icon-oth' /> test@gmail.com</li>
      <li className='li-ftlinks'><IoLocationOutline className='icon-oth'/> Kisumu, Kenya</li>
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