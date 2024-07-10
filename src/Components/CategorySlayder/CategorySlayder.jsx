
// import styles from './CategorySlayder.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Slider from "react-slick";

export default function CategorySlayder() {
  let [categorySlayder , setCategorySlayder] = useState([])

  async function getCategorySlayder(){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    setCategorySlayder(data.data)
  }

  useEffect(()=>{
    getCategorySlayder()
  
  },[])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2
  };
  
  return  <>
        <Slider {...settings}>
          {categorySlayder.map((category)=> <div  key={category._id}>
            
            <img height={150} className='w-100' src={category.image} alt="" />
            <h2 className='h6 pt-2'>{category.name}</h2>
          </div>)}
    </Slider>
    </>
  
}
