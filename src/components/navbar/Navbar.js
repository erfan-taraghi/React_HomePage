import React, { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import {DiCodeigniter} from "react-icons/di"

import './Navbar.css';



const Navbar = () => {
  const [showIcon,setShowIcon] =useState(false)

  const toggleMenu = () => {
    setShowIcon(!showIcon)
  }
  return (
    <nav className='navbar container'>
      <div className="menu">
        <ul className="nav-links" id={showIcon ? "show-links-mobile": "show-links-mobile-hide"}>
          <li><a className='btn btn-dark' href="">خانه</a></li>
          <li><a href="">درباره ما</a> </li>
          <li><a href="">امکانات</a></li>
          <li><a href="">دانلود</a></li>
          <li><a href="">مشترک شوید</a> </li>
        </ul>
      </div>
      <div className="logo">
        <p className='logo-text'>
          <span >
            <DiCodeigniter   size={30} />
            <DiCodeigniter  size={30} />
          </span>
          <span>
           لوگوی شما
          </span>
        </p>
      </div>
      <div className="menu-icons" onClick={toggleMenu}>
        {
          showIcon ? 
           <RiCloseLine size={35} color={"#fff"} cursor={"pointer"}/> :
           <AiOutlineBars size={35} color={"#fff"} cursor={"pointer"}/>
        }
      </div>
    </nav>
  )
};

export default Navbar;
