import React from 'react'
import './Home.css'
import Hero from './Hero'
import Gallery from './Gallery'
import Safaris from './Safaris'
import Section from './Section'
import Counter from './Counter'
import Newsletter from './Newsletter'


function Home() {
  return (
    <div className='home_container'>
      <Hero/>
      <Gallery/>
      <Section/>
      <Safaris/>
      <Counter/>
      <Newsletter/>
    </div>
  )
}

export default Home