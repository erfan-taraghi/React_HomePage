import React,{useEffect} from 'react';
import phoneHeader from "../../images/picDesign.webp"
import { SiCbs } from "react-icons/si";
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
   useEffect(()=>{
    AOS.init({
        duration: 1000
    });
   })
    return ( <
        section id = "header" >
        <
        div className = "container header" >
        <
        div className = "header-right" data-aos="fade-right" >
        <
        h1 >
        <
        span > طراحی ساختگی سادگی < /span> <
        span > استایل مناسب < /span> <
        span > ریسپانسیو شده < /span> <
        /h1> <
        p > لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است < /p> <
        div className = "header-btn" >
        <
        a href = ""
        className = "btn btn-dark" > بیاین شروع کنیم < /a> <
        a href = ""
        className = "btn btn-light" > چجوری کار میکنیم < /a> <
        /div> <
        /div> <
        div className = "header-left"data-aos="flip-left" >
        <
        img src = { phoneHeader }
        alt = "" / >
        <
        /div> <
        /div> <
        div className = "floating-icon" >
        <
        a href = "#features" >
        <
        SiCbs size = { 25 }
        className = "mouse" / >
        <
        /a> <
        /div> <
        /section>
    )
};

export default Header;