import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

// import styles from './FeatureProducts.module.css';

export default function Products() {

  let [products , setProducts] = useState([])

  const [isloading, setisloading] = useState(false)

  async function getProducts(){
    setisloading(true)
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    setProducts(data.data)
    setisloading(false)
  }

  useEffect(()=>{
    getProducts()
  
  },[])
  return <>
  <Helmet>
    <title>Products</title>
  </Helmet>
  <div className="row">
    {isloading ? 
    <div className='text-center mt-4'> <i className='fas fa-spin fa-3x fa-spinner text-main '></i></div>
  :<>
  
    {products.map((product)=> <div key={product._id} className='col-md-2' >
      <div className="product cursor-pointer px-2 py-3">
        <Link to={'/ProductDetails/'+product.id}>
        <img className='w-100 ' src={product.imageCover} alt="" />
        <span className='text-main fw-bold font-sm'>{product.category.name} </span>
        <h3 className='h6'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'>{product.price} EGP</span>
          <span >
            <i className='fas fa-star rating-color '></i>
            {product.ratingsAverage}
          </span>
          

        </div>
        </Link>


        <button className='btn bg-main text-white w-100'> + Add</button>
      </div>
      
      </div>)}
  </>}
  </div>
    </>
  
}
