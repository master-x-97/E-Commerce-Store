import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import styles from './ProductDetails.module.css';
import Slider from "react-slick";
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';
import {Helmet} from "react-helmet";
import { useQuery } from 'react-query';
import { CircleLoader } from 'react-spinners';


export default function ProductDetails() {
  let params = useParams() 
  function getProductDetails (id){
     
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

  }
  let {isLoading , isError , data} = useQuery('productDetails' , ()=>getProductDetails(params.id))
 console.log(data?.data.data);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };





  return   <>
  <Helmet>
                <title>ProductDetails </title>

            </Helmet>

            {isLoading?<div className='w-100 py-2 d-flex justify-content-center'>
  <CircleLoader
  color="#36d7b7"
  cssOverride={{}}
  loading
  size={100}
  speedMultiplier={0.75}
/>
  </div>:
  
     <div className="row justify-content-center align-items-center">
  
   
  
  
     <div className="col-md-4">

      <img className='w-100' src={data?.data.data.imageCover} alt="" />

      <Slider {...settings}>
      {data?.data.data.images?.map((img) => <div className='border-0'>
      <img className='w-100 py-1 border-0 mx-2 ps-1 ' src={img} alt="" />
     </div>)}
     </Slider>
   </div>
    <div className="col-md-8">
    <h1>{data?.data.data.title}</h1>
    <p>{data?.data.data.description}</p>
    <div className='d-flex justify-content-between'>
    <span className='text-muted'>{data?.data.data.price} EGP</span>
    <span >
      <i className='fas fa-star rating-color '></i>
      {data?.data.data.ratingsAverage}
    </span>
    

   </div>
    <button   className='btn bg-main text-white w-100 my-4'> + Add</button>
  </div>
  
</div>
}
  
    </>
  
}












{/* <div className="container">
<div className="row justify-content-center align-items-center">
  {isloading?
  <div className='text-center mt-4'> <i className='fas fa-spin fa-3x fa-spinner text-main '></i></div>
   :<>
  
  
  <div className="col-md-4">

    <img className='w-100' src={ProductDetails.imageCover} alt="" />

  <Slider {...settings}>
    {ProductDetails?.images?.map((img) => <div className='border-0'>
      <img className='w-100 py-1 border-0 mx-2 ps-1 ' src={img} alt="" />
    </div>)}
</Slider>
  </div>
  <div className="col-md-8">
    <h1>{ProductDetails.title}</h1>
    <p>{ProductDetails.description}</p>
    <div className='d-flex justify-content-between'>
    <span className='text-muted'>{ProductDetails.price} EGP</span>
    <span >
      <i className='fas fa-star rating-color '></i>
      {ProductDetails.ratingsAverage}
    </span>
    

  </div>
    <button  onClick={()=>addProduct(id)} className='btn bg-main text-white w-100 my-4'> + Add</button>
  </div>
  </>}
</div>
</div> */}







// let {addToCart} = useContext(cartContext)
// async function  addProduct (productId){
//   let response = await addToCart(productId);
//   console.log(response);
//   if(response?.data?.status === "success"){
//     toast.success(response.data.message ,{duration:2000})
//   }
//   else{
//     toast.error('error : you  must login to add to cart' ,{duration:4000})
    
//   }
// }

// let [ProductDetails,setProductDetails] = useState({})
// const [isloading, setisloading] = useState(false)

// async function getProductDetails(){
//   setisloading(true)
//   let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
//   console.log(data.data);
//   setProductDetails(data.data)
//   setisloading(false)
// }

// useEffect(()=>{
//   getProductDetails()

// },[])


// let {id}= useParams()
// console.log(id);
