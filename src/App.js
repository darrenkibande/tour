import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
      <Navbar/>   
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/about' element={<AboutUs/>}></Route>
        <Route exact path='/services' element={<Services/>}></Route>
        <Route exact path='/gallery' element={<Gallery/>}></Route>
        <Route exact path='/products' element={<Products/>}></Route>
        <Route exact path='/blog' element={<Blog/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/faq' element={<FAQ/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;

