import React from 'react'
import './Tours.css'
import pic from '../assets/elizeu-dias-SEq9dyZSe6c-unsplash.jpg'

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
      <h3 class="card__title">New York</h3>
      <p class="card__text">$950</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nostrum.</p>
      <div class="card__details">
        <p class="card__detail">100 Superb</p>
        <p class="card__detail">12 Days<span class="card__detail--highlight">71</span> Anmerica</p>
      </div>
      <button class="card__button">Book Now</button>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Tours