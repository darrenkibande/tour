import React from 'react'
import './Home.css'
import Hero from './Hero'
import Gallery from './Gallery'


function Home() {
  return (
    <div className='home_container'>
      <Hero/>
      <Gallery/>
    </div>
  )
}

export default Home