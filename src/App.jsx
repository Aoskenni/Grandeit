import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Services from './components/Services'
import LogIn from './components/LogIn'
import Register from './components/Register'
import FreeDownloads from './components/FreeDownloads'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/Grandeit" element={<Home />}></Route>
      <Route exact path="/about" element={<AboutUs />}></Route>
      <Route exact path="/contact" element={<ContactUs />}></Route>
      <Route exact path="/footer" element={<Footer />}></Route>
      <Route exact path="/service" element={<Services />}></Route>
      <Route exact path="/login" element={<LogIn />}></Route>
      <Route exact path="/register" element={<Register />}></Route>
      <Route exact path="/downloads" element={<FreeDownloads />}></Route>
      

    </Routes>
    </BrowserRouter>
  )
}

export default App