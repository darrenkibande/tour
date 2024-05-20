import React from 'react'
import './Tours.css'
import pic from '../assets/elizeu-dias-SEq9dyZSe6c-unsplash.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

function Tours() {
  return (
    <div className="tour-container">   
    <div className="tour-sect">     
        <p className="banner-title">Tour List</p>
    </div>

    <div class="card-container">
 
  <div class="card">
    <img src={pic} alt="" class="card__image"/>
    <div class="card__info">
      <h3 class="card__title"><IoLocationOutline className='icon__tour'/>New York</h3>
      <p class="card__text">$950<span>/Per Person</span></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nostrum.</p>
      <div class="card__details">
        <p class="card__detail">100 Superb</p>
        <p class="card__detail"><FaRegCalendarAlt className='icon__tour'/>12 Days/ 13 nights</p>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Tours