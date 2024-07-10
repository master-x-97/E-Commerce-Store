import { useFormik } from 'formik';
import React, {  useContext, useState } from 'react'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { cartContext } from '../../Context/CartContext';



export default function Login({saveUserData}) {
  let {setuserData} = useContext(cartContext)
  
  let navigate =  useNavigate();
  const [isloding, setisloding] = useState(false)
  
  async function handleLogin(values){
    
    setisloding(true)
    
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values);
    console.log(values);
    console.log(data);
  
    if(data.message === 'success'){
      localStorage.setItem("userToken" , data.token)
      saveUserData()
      setisloding(false)
      navigate('/')
      setuserData(data.user)
      console.log(data);
    }
  }
  

let validation = Yup.object({
  email:Yup.string().required('email is required').email('email is invalid'),
  password:Yup.string().min(5 , 'name minlenght is 5').max(30 , 'name is maxlengh is 30').required('password is required').matches(/^[A-Z][a-z0-9!@#$%^&*]{5,30}$/ ,"password must start with uppercase and should be inclode a number"),
})

let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:validation,
    onSubmit: handleLogin
  });
  return <>
    <div className="w-75 mx-auto py-5">
      <h3>Login  Now :</h3>
    <form onSubmit={formik.handleSubmit}>

  

      <label htmlFor="email">Email :</label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.email} type="email" name='email' id='email' />
      {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div>:null}

      <label htmlFor="password">Password :</label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.password} type="password" name='password' id='password' />
      {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div>:null}

      {isloding?<button  type='button' className='btn bg-main text-white'><i className='fa fa-spinner fa-spin'></i></button>:<button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Login</button> }
   </form>
    </div>
    </>
  
}
