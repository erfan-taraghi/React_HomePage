import React from 'react';
import phoneHeader from "../../images/picDesign.webp"
import './Header.css'
const Header = () => {
  return (
    <section id="header">
      <div className="container header">
        <div className="header-right">
          <h1>
            <span>طراحی ساختگی سادگی  </span>
            <span>استایل مناسب </span>
            <span>  ریسپانسیو شده </span>
          </h1>
          <small>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</small>
          <div className="header-btn">
          <a href="" className="btn btn-dark">بیاین شروع کنیم</a>
            <a href="" className="btn btn-light">چجوری کار میکنیم</a>
          </div>
        </div>
        <div className="header-left">
          <img src={phoneHeader} alt="" />
        </div>
      </div>
    </section>
  )
};

export default Header;
