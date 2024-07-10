import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
// import styles from './FeatureProducts.module.css';

export default function Brands() {

  let [brands , setbrands] = useState([])

  const [isloading, setisloading] = useState(false)

  async function getbrands(){
    setisloading(true)
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    setbrands(data.data)
    setisloading(false)
  console.log(data.data);
  }

  useEffect(()=>{
    getbrands()
  
  },[])
  return <>
              <Helmet>
                <title>Brands</title>
              </Helmet>
  <div className="row">
    {isloading ? 
    <div className='text-center mt-4'> <i className='fas fa-spin fa-3x fa-spinner text-main '></i></div>
  :<>
  <div className="container">
    <div className="row">
      {brands.map((brand)=>  <div key={brand._id} className="col-md-2">
        <img className='w-100' src={brand.image} alt="" />
        <h3 className='text-center'>{brand.name}</h3>
        <h6>{brand.slag}</h6>
        <div className='d-flex justify-content-between'>
          {/* <div>{brand.createdAt}</div> */}
          {/* <div>{brand.updatedAt}</div> */}
        </div>
      </div>)}

    </div>
  </div>

  </>}
  </div>
    </>
  
}
