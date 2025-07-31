import React from 'react'
/* import { useState } from 'react' */
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'

const Myhamburger = () => {
    /* const [isOpen, setIsOpen] = useState(false); */
    const toggleHamburger = () => {
        let navSidebar = document.querySelector(".nav-mobile");
        let servicesDropDown = document.querySelector(".drop-down-mobile");
        (navSidebar.style.display === "flex") ? (navSidebar.style.display = "none") : (navSidebar.style.display = "flex");
        servicesDropDown.style.display = "none";
    }

    const dropDown = () => {
  let servicesDropDown = document.querySelector(".drop-down-mobile");
  /* if (servicesDropDown.style.display === "flex") {
    servicesDropDown.style.display = "none";
  } else {
    servicesDropDown.style.display = "flex";
  } */
  (servicesDropDown.style.display === "flex") ? servicesDropDown.style.display = "none" : servicesDropDown.style.display = "flex";
}
  /* const closeDropDown = () => {
    let servicesDropDown = document.querySelector(".drop-down-mobile");
    servicesDropDown.style.display  = "none"
  }
  const serviceOnClick = () => {
    let servicesDropDown = document.querySelector(".drop-down-mobile");
    servicesDropDown.style.display = "none"
  } */



  return (
    <>
    <div className="hambMenuImport" onClick={toggleHamburger} >
      <Hamburger />
    </div>
    <div className="nav-mobile">
                <Link to="/">Home</Link>
                
                <div className="drop-down-container-mobile" onClick={dropDown}>
                          <div className="services-mobile" >Services</div>
                          <div className="drop-down-mobile">
                            <div className="service-group-mobile">
                            <Link to="/service">Beats making/Instrumentals</Link>
                            <Link to="/service">Mixing & Mastering</Link>
                            </div>
                            <div className="service-group-mobile">
                            <Link to="/service">Song Writing</Link>
                            <Link to="/service">Film Scoring</Link>
                            </div>
                            <div className="service-group-mobile">
                            <Link to="/service">Consultations</Link>
                            <Link to="/service">Digital Marketing and Promotions</Link>
                            </div>
                            </div>
                          </div>
                
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="">Account</Link>
              </div>


    {/* <div  onClick={toggleHamburger}>
        <hr className="burger buger1" />
        <hr className="burger buger2" />
        <hr className="burger buger3" />
        
    </div> */}
    
    
    </>
  )
}

export default Myhamburger