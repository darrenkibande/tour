import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
// import OurTeam from './components/Team';
import Destination from './components/Destinations';
import Tours from './components/Tours';
import Blogs from './components/Blogs'
import Offer from './components/WhatWeOffer'
import DestinationInfo from './components/Destination_info';
import TourPackages from './components/TourPackage';
import AdminDestination from './components/AdminDestination';
import AdminTour from './components/AdminTour';
import AdminMenu from './components/AdminMenu';


function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
      <Navbar/>   
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/What we offer' element={<Offer/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/Faq' element={<FAQ/>}></Route>
        <Route exact path='/Contact us' element={<ContactUs/>}></Route>
        <Route exact path='/About us' element={<AboutUs/>}></Route>
        {/* <Route exact path='/Our team' element={<OurTeam/>}></Route> */}
        <Route exact path='/destinations' element={<Destination/>}></Route>
        <Route exact path='/tours' element={<Tours/>}></Route>
        <Route exact path='/Blogs' element={<Blogs/>}></Route>
        <Route exact path='/TourPackages' element={<TourPackages/>}></Route>
        <Route path="/DestinationInfo" element={<DestinationInfo />}></Route>         
        <Route exact path='/AdminDestination' element={<AdminDestination/>}></Route>
        <Route exact path='/AdminTour' element={<AdminTour/>}></Route>
        <Route exact path='/AdminMenu' element={<AdminMenu/>}></Route>

        
        {/* <Route exact path='/products' element={<Products/>}></Route>
        <Route exact path='/blog' element={<Blog/>}></Route>
         */}
        
      </Routes>
      <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;

