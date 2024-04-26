import React from 'react'
import './Hero.css'
import video from '../assets/video.mp4'

import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
    <div className="hero-container">
        <div className="video-bg">
            <video src={video} autoPlay loop muted className='video-css'></video>
        </div>

        <div className="hero-txt">
          <p className='h-title'>Unlock your travel dreams with us.</p>
          <p className='h-subtle'>Discover the worlds most adventurous nature</p>
          <button className='btn'>Find out more</button>
        </div>

        <div className="float-div">
          <div className="inp-sect">
            <p className='h-subtle'>Find Adventure That Suits Your Needs</p>
            <div className="inp-items">
              <input type="text" name="" id="" placeholder='Where to?'className='inp-change'/>
              <input type="date" name="" id="" placeholder='When?' className='inp-change'/>
              <input type="text" name="" id="" placeholder='Travel type?'className='inp-change'/>
              <button className='btn'><CiSearch className='icon-oth'/> Search</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero