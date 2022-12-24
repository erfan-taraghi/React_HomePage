import React,{useEffect} from 'react';
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram, TiSocialGooglePlus } from "react-icons/ti";
import './Subscribe.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
  useEffect(()=>{
    AOS.init({
        duration: 1000
    });
   })
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-right">
        <h2>حالا مشترک شوید</h2>
        <form >
          <button>مشترک شدن</button>
          <input type="text" placeholder='ایمیل خود را وارد کنید' />
        </form>
        <div className="socials">
          <div className="social-icon">

            <TiSocialInstagram />

          </div>
          <div className="social-icon">

            <TiSocialGooglePlus />

          </div>
          <div className="social-icon">

            <TiSocialFacebook />

          </div>
          <div className="social-icon">

            <TiSocialTwitter />

          </div>
        </div>
      </div>
    </section>
  )
};

export default Subscribe;
