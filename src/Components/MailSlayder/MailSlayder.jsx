import React from 'react'
import Slider from "react-slick";

import styles from './MailSlayder.module.css';
import slider1 from '../../assets/images/slider-image-1.jpeg';
import slider2 from '../../assets/images/slider-image-2.jpeg';
import slider3 from '../../assets/images/slider-image-3.jpeg';
import blog1 from '../../assets/images/grocery-banner.png';
import blog2 from '../../assets/images/grocery-banner-2.jpeg';


export default function MailSlayder() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return   <>
  <div className="row  gx-0">
    <div className="col-md-10">

        <Slider {...settings}>
          <img height={200} className='w-100' src={slider1} alt="" />
          <img height={200} className='w-100' src={slider2} alt="" />
          <img height={200} className='w-100' src={slider3} alt="" />
    </Slider>
    </div>
    <div className="col-md-2 ">
      <img height={100} className='w-100' src={blog1} alt="" />
      <img height={100} className='w-100' src={blog2} alt="" />

    </div>
  </div>

    </>
  
}
