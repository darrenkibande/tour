import React from 'react'
import './Section.css'

import { IoDiamondOutline } from "react-icons/io5";

function Section() {
  return (
    <div className='sect-container'>

    <div className="sect-card">
       <div class="profileImage">
       <IoDiamondOutline /> 
        </div>

    <div class="textContainer">
      <p class="name">Pepper Potts</p>
      <p class="profile">Profile</p>
    </div>
    </div>

    <div className="sect-card">
       <div class="profileImage"> 
       <IoDiamondOutline />
        </div>

    <div class="textContainer">
      <p class="name">Pepper Potts</p>
      <p class="profile">Profile</p>
    </div>
    </div>

    <div className="sect-card">
       <div class="profileImage">
       <IoDiamondOutline /> 
        </div>

    <div class="textContainer">
      <p class="name">Pepper Potts</p>
      <p class="profile">Profile</p>
    </div>
    </div>

    <div className="sect-card">
       <div class="profileImage">
       <IoDiamondOutline /> 
        </div>

    <div class="textContainer">
      <p class="name">Pepper Potts</p>
      <p class="profile">Profile</p>
    </div>
    </div>

    </div>
  )
}

export default Section