import React from 'react'
import './Home.css'
import Hero from './Hero'
import Gallery from './Gallery'
import Safaris from './Safaris'


function Home() {
  return (
    <div className='home_container'>
      <Hero/>
      <Gallery/>
      <Safaris/>
    </div>
  )
}

export default Home