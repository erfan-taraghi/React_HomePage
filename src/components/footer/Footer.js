import React,{useEffect} from 'react';
import logo from "../../images/footer-img.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  useEffect(()=>{
    AOS.init({
        duration: 1000
    });
   })
  return (
    <section id="footer">
      <div className="container footer"data-aos="fade-up">
        <div className="quick-access">
          <h4>لینک های مفید</h4>
          <div className="footer-links">
            <a href="#">&bull; پشتیبانی</a>
            <a href="#">&bull; درباره ما</a>
            <a href="#">&bull; آموزش</a>
            <a href="#">&bull; هاستینگ</a>
            <a href="#">&bull; پیام رسان</a>
          </div>
        </div>
        <div className="support">
          <div className="footer-links">
            <a href="#">&bull; پشتیبانی</a>
            <a href="#">&bull; درباره ما</a>
            <a href="#">&bull; آموزش</a>
            <a href="#">&bull; هاستینگ</a>
            <a href="#">&bull; پیام رسان</a>
          </div>
        </div>
        <div className="contact">
          <h4>راه های ارتباطی</h4>
          <div className="footer-contact">
            <p><FaMapMarkerAlt /> &nbsp; آدرس : شیراز سمت راست</p>
            <p><FaPhoneAlt /> &nbsp; تلفن : 0989111111111 </p>
            <p> <FaFax /> &nbsp; فکس : 0989111111111</p>
            <p> <FaEnvelope /> &nbsp; ایمیل : Example@gmail.com</p>
            <p><FaGlobe /> &nbsp; وبسایت : www.example.com </p>
          </div>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="" />
          <p>&copy; Copyright 2023</p>

        </div>
      </div>
    </section>
  )
};

export default Footer;
