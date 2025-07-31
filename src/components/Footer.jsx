import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div >
        <div className="footer-container">
          <div className="grandeit-email">
            <h2>GRANDEIT</h2>
            <a href="">
              <i
                className="fa-solid fa-envelope fa-xl"
                style={{ color: "#fff" }}
              ></i>{" "}
              Email
            </a>
          </div>
          <div className="footer-flex2">
            <Link to="/">Home</Link>
            <a href="">My Account</a>
            <a href="">Beats & Instrumentals</a>
          </div>
          <div className="footer-flex3">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="">Privacy & Terms of Use</a>
          </div>
          <div className="footer-flex4">
            <a href="">
              {" "}
              <i
                className="fa-brands fa-facebook fa-l fa-facebook-footer"
                style={{ color: "#fff" }}
              ></i>
            </a>
            <a href="">
              <i
                className="fa-brands fa-whatsapp fa-l fa-whatsapp-footer"
                style={{ color: "#fff" }}
              ></i>
            </a>
            <a href="">
              <i
                className="fa-brands fa-instagram fa-l fa-instagram-footer"
                style={{ color: "#fff" }}
              ></i>
            </a>
            <a href="">
              <i
                className="fa-brands fa-twitter fa-l fa-twitter-footer"
                style={{ color: "" }}
              ></i>
            </a>
            <a href="">
              <i
                className="fa-brands fa-tiktok fa-l fa-tiktok-footer"
                style={{ color: "" }}
              ></i>
            </a>
          </div>
        </div>
        <div className="footer-flex4-mobile">
          <a href="">
            {" "}
            <i
              className="fa-brands fa-facebook fa-l fa-facebook-footer"
              style={{ color: "#fff" }}
            ></i>
          </a>
          <a href="">
            <i
              className="fa-brands fa-whatsapp fa-l fa-whatsapp-footer"
              style={{ color: "#fff" }}
            ></i>
          </a>
          <a href="">
            <i
              className="fa-brands fa-instagram fa-l fa-instagram-footer"
              style={{ color: "#fff" }}
            ></i>
          </a>
          <a href="">
            <i
              className="fa-brands fa-twitter fa-l fa-twitter-footer"
              style={{ color: "" }}
            ></i>
          </a>
          <a href="">
            <i
              className="fa-brands fa-tiktok fa-l fa-tiktok-footer"
              style={{ color: "" }}
            ></i>
          </a>
        </div>
        <div className="copyright">
          <span>@Copyright 2024.|Grandeit</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
