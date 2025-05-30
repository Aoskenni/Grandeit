import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const dropDown = () => {
    let servicesDropDown = document.querySelector(".drop-down");
    servicesDropDown.style.visibility = "visible";
  }
  const closeDropDown = () => {
    let servicesDropDown = document.querySelector(".drop-down");
    servicesDropDown.style.visibility  = "hidden"
  }
  const serviceOnClick = () => {
    let servicesDropDown = document.querySelector(".drop-down");
    servicesDropDown.style.visibility = "hidden"
  }
  

  return (
    <>
  
      <div className="header-flex" onClick={closeDropDown}>
        <div className="logo">
          <img src="src/assets/grandeit-logo.png" alt="" id="logo"/>
        </div>

        <div className="header-a-tags" >
          <Link to="/">Home</Link>
          <div className="drop-down-container" onMouseEnter={dropDown}>
          <a className="services" >Services</a>
          <div className="drop-down" onMouseEnter={dropDown}  onMouseLeave={closeDropDown}>
            <div className="service-group">
            <Link to="/service">Beats making/Instrumentals</Link>
            <Link to="/service">Mixing & Mastering</Link>
            </div>
            <div className="service-group">
            <Link to="/service">Song Writing</Link>
            <Link to="/service">Film Scoring</Link>
            </div>
            <div className="service-group">
            <Link to="/service">Consultations</Link>
            <Link to="/service">Digital Marketing and Promotions</Link>
            </div>
          </div>
          </div>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <div href="" className="cart-cartnumber">
            <i className="fa-solid fa-cart-shopping" style={{ color: "#fff" }}><small>$0.00</small></i><div className="cartnumber"><small>0</small></div>
          </div>
        </div>
        <div className="header-search">
          
        </div>
      </div>

    </>
  );
};

export default Header;
