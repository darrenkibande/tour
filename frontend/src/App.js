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

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
      <Navbar/>   
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/Register' element={<Register/>}></Route>
        <Route exact path='/What we offer' element={<Offer/>}></Route>
        <Route exact path='/Login' element={<Login/>}></Route>
        <Route exact path='/Faq' element={<FAQ/>}></Route>
        <Route exact path='/Contact us' element={<ContactUs/>}></Route>
        <Route exact path='/About us' element={<AboutUs/>}></Route>
        {/* <Route exact path='/Our team' element={<OurTeam/>}></Route> */}
        <Route exact path='/Destination' element={<Destination/>}></Route>
        <Route exact path='/Tours' element={<Tours/>}></Route>
        <Route exact path='/Blogs' element={<Blogs/>}></Route>
         
        {/* <Route exact path='/services' element={<Services/>}></Route>
        <Route exact path='/gallery' element={<Gallery/>}></Route>
        <Route exact path='/products' element={<Products/>}></Route>
        <Route exact path='/blog' element={<Blog/>}></Route> */}
        
        
      </Routes>
      <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;

