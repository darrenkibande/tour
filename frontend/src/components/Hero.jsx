import React, {useEffect} from 'react'
import './Hero.css'
import video from '../assets/video.mp4'
import { Link } from 'react-router-dom';

import { CiSearch } from "react-icons/ci";

import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {

  useEffect(() => {
    // window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="hero-container">
        <div className="video-bg">
            <video src={video} autoPlay loop muted className='video-css'></video>
        </div>

        <div data-aos="zoom-in-up" className="hero-txt">
          <p className='h-title'>Unlock your travel dreams with us.</p>
          <p className='h-subtle'>Discover the worlds most adventurous nature</p>
          <Link to='/destinations'><button className='customBtn'>Find out more</button></Link>
        </div>

        <div className="float-div">
          <div className="inp-sect">
            <p className='h-subtle'>Find Adventure That Suits Your Needs</p>
            <div className="inp-items">
              <input type="text" name="" id="" placeholder='Where to?'className='input-custom'/>
              <input type="date" name="" id="" placeholder='When?' className='input-custom inp-date'/>
              <input type="text" name="" id="" placeholder='Travel type?'className='input-custom'/>
              <button className='customBtn'><CiSearch className='icon-oth'/> Search</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero