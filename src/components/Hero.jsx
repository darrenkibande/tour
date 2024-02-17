import React from 'react'
import './Hero.css'
import hero_img from '../assets/download.jpg'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-cont">
      <div className="hero-lt">
        <span className='title_h1'>The best way to see Kenya</span>
      <p className='txt_cont'>
      Chasylm Tours is among Kenya’s oldest and most respected tour companies. Founded in the 1950s by Karl Pollman, Pollman’s Tours & Safaris has grown to more become an industry leader with more than 200 late model vehicles meeting the needs of a variety of group and individual clients and custom designed for the roads of Kenya.
        </p>

        <button className='btn'>Find out more</button>
      </div>

      <div className="hero-rt">
      <img src={hero_img} alt="" />
      </div>
      </div>
      
        <div className="float_div">
          {/* <p>Find Adventure That Suits Your Needs</p> */}
          <div className="data_input">
          <input type="text" name="" id="" placeholder='Where to?'className='dt-inp'/>
          <input type="datetime" name="" id="" placeholder='When' className='dt-inp'/>
          <input type="text" name="" id="" placeholder='Travel Type' className='dt-inp'/>
          <input type="button" value="FIND NOW" className='btn_hero' />
          </div>
        </div>
    </div>   
  )
}

export default Hero