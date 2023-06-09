import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import "./style.css"
import Home from './Home'
import About from './About'
import Services from './Services'

function Navbar() {
  return (
    <div className='navbar-section'>
      <img width={130} height={70} src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="Netflix Logo" />

      <BrowserRouter>
        <span><NavLink to="/home">Home</NavLink></span>
        <span><NavLink to="/about">About</NavLink></span>
        <span><NavLink to="/services">Services</NavLink></span>

        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar

