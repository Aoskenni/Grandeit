import React from "react";
import { Link } from "react-router-dom";
import Myhamburger from "./Hamburger";
import grandeitLogo from '../assets/grandeit-logo.png';
import mobileCart from '../assets/mobile-cart.svg';

const Header = () => {

  const serviceClick = () => {
    let servicesDropDown = document.querySelector(".drop-down");
    (servicesDropDown.style.display === "flex") ? (servicesDropDown.style.display ="none") : (servicesDropDown.style.display ="flex")
  }
  

  return (
    <>
  
      <div className="header-flex" >
        <div className="logo">
          <img src={grandeitLogo} alt="" id="logo"/>
        </div>

        <div className="header-a-tags" >
          <Link to="/">Home</Link>
          <div className="drop-down-container"  onClick={serviceClick}>
          <a className="services" >Services</a>
          <div className="drop-down">
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
        <div>

        </div>
      </div>
      {/* Mobile MENU */}
        <div className="header-flex-mobile">
          <div className="mobile-menu">
            <Myhamburger  />
          </div>
          <div className="logo-mobile">
            <img src={grandeitLogo} alt="" id="logoMobile"/>
            
          </div>
          <div className="cart-cartnumber">
            <img src={mobileCart} alt="" id="mobileCart" /><strong><small>0</small></strong>
          </div>
          <div className="mobile-login"><Link to="/login">Login</Link></div>
        </div>

    </>
  );
};

export default Header;
