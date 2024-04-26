import React from 'react'
import './Section.css'

import { IoDiamondOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Section() {
  return (
    <div className='sect-container'>

    <div className="sect-card">      
    <div className="prof-bg">
      <span> <IoDiamondOutline class="profileImage"/></span>
      </div>      

    <div class="textContainer">
      <p class="name">Special Activities</p>
      <p class="profile">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium incidunt consequuntur!</p>
    </div>
    </div>

    <div className="sect-card">
    <div className="prof-bg">
      <span> <LuPencil class="profileImage"/></span>
      </div>
    <div class="textContainer">
      <p class="name">Travel Arragement</p>
      <p class="profile">Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps Etiam ferm entum tinc idunt incidunt consequuntur!.</p>
    </div>
    </div>

    <div className="sect-card">
      <div className="prof-bg">
      <span> <CiStar class="profileImage"/></span>
      </div>
   

    <div class="textContainer">
      <p class="name">Your Private Guide</p>
      <p class="profile">Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps Etiam ferm entum tinc idunt incidunt consequuntur!.</p>
    </div>
    </div>

    <div className="sect-card">
    <div className="prof-bg">
      <span> <CiLocationOn class="profileImage"/></span>
      </div>

    <div class="textContainer">
      <p class="name">Location Manager</p>
      <p class="profile">Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps Etiam ferm entum tinc idunt incidunt consequuntur!.</p>
    </div>
    </div>

    </div>
  )
}

export default Section