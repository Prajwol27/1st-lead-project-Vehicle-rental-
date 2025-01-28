import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Aboutus from './Components/pages/Aboutus'
import Bikes from './Components/pages/Bikes'
import Bus from './Components/pages/Bus'
import Cars from './Components/pages/Cars'
import Contact from './Components/pages/Contact'
import Home from './Components/pages/Home'
import Login from './Components/pages/Login'
import Vehicles from './Components/pages/Vehicles'
import Booking from './Components/pages/Booking';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/vehicles" element={<Vehicles/> } />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/log-in" element={<Login/> } />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/bikes" element={<Bikes/>} />
        <Route path="/bus" element={<Bus/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
    </Router>
  );
}

export default App;
