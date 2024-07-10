import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { cartContext } from '../../Context/CartContext';
import styles from './Checkout.module.css';


export default function Checkout() {
  let {onLinePayment,cartId}=useContext(cartContext)
  async function handleSubmit(values){
    let response = await onLinePayment(cartId , values)
    if(response?.date?.status === 'success')
      
      console.log(response.data.session.url);
      window.location.href = response.data.session.url
      console.log(response);
    
  }
let formik = useFormik({
  initialValues:{
    details:'',
    city:'',
    phone:''
  },
  onSubmit:handleSubmit
})


return <>
    
    <div className="w-50 py-5 mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="details">details :</label>
        <input type="text" className='form-control' value={formik.values.details} onChange={formik.handleChange} name='details' id='details' />

        <label htmlFor="phone">phone :</label>
        <input type="tel" className='form-control' value={formik.values.phone} onChange={formik.handleChange} name='phone' id='phone' />

        <label htmlFor="city">city :</label>
        <input type="text" className='form-control' value={formik.values.city} onChange={formik.handleChange} name='city' id='city' />

        <button type='submit' className='btn border-main w-100 my-4'>pay</button>
      </form>
    </div>
    </>
  
}
