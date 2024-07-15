import React, {useEffect} from 'react'
import './Home.css'
import Hero from './Hero'
import Gallery from './Gallery'
import Safaris from './Safaris'
import Section from './Section'
import Counter from './Counter'
import Newsletter from './Newsletter'

import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);

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