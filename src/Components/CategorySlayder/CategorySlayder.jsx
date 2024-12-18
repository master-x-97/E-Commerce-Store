// import styles from './CategorySlayder.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import Slider from "react-slick";




export default function CategorySlayder() {
  let [categorySlayder , setCategorySlayder] = useState([])

function getCategorySlayder(){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

  let {isLoading , isError , isFetching , data} = useQuery('CategorySlayder' , getCategorySlayder )
  // console.log(data?.data.data);
  

  useEffect(()=>{
    getCategorySlayder()
  
  },[])
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2
  };
  
  return  <>

          {data?.data.data? <Slider {...settings}>
          {data?.data.data.map((category)=>    <img key={category._id} height={150} className='w-100 px-1 bg-body-tertiary' src={category.image} alt="" />)}

          </Slider> : ''}
            

            {/* <h2 className='h6 pt-2'>{category.name}</h2> */}

    
    </>
  
}
