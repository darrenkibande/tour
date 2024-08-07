import React, {useEffect} from 'react'
import {FaHammer, FaBrush, FaWrench, FaTruckPickup, FaBroom, FaPlug,} from "react-icons/fa";
import "./WhatWeOffer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Newsletter from './Newsletter';

function BannerDest() {
  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="banner-dest">
      <div className="banner-sect">
        <p className='banner-title'>What we offer</p>
      </div>    
    </div>   
  );
}

function OfferContent({ icon, title, description }) {
  return (
    <div className="offer-content">
      <div className="offer_card">
        <div className="icon-wrapper">{icon}</div>
        <p className="offter-title">{title}</p>
        <p className="offer_cont">{description}</p>
      </div>
    </div>
  );
}

function WhatWeOffer() {
  return (
    <div className="offer-section">    
    <BannerDest />
    <div data-aos="zoom-in" className="offer_row">
      
      <OfferContent
        icon={<FaHammer />}
        title="Service Heading"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
      <OfferContent
        icon={<FaBrush />}
        title="Service Heading"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
      <OfferContent
        icon={<FaWrench />}
        title="Service Heading"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
      <OfferContent
        icon={<FaTruckPickup />}
        title="Service Heading"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
      <OfferContent
        icon={<FaBroom />}
        title="Service Heading"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
      <OfferContent
        icon={<FaPlug />}
        title="Service Heading"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
    </div>
    <Newsletter/>
    </div>
  );
}

export default WhatWeOffer;
