import React from 'react'
import './Hero.css'
import video from '../assets/video.mp4'

function Hero() {
  return (
    <div className="hero-container">
        <div className="video-bg">
            <video src={video} autoPlay loop muted></video>
        </div>
    </div>
  )
}

export default Hero