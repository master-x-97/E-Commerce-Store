import React, {  useState } from 'react'
import { Formik, useFormik } from 'formik';
import styles from './Login.module.css';
import * as Yup from 'yup'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';



export default function Login() {
   
  let navigate =  useNavigate();
  const [error, seterror] = useState(null)
  const [isloding, setisloding] = useState(false)
  
  async function loginSubmit(values){
    
    setisloding(true)
    
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
    .catch((err)=>{
      setisloding(false);
      seterror(err.response.data.message)
    })

  
    if(data.message === 'success'){
      setisloding(false)
      navigate('/')

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
    onSubmit: loginSubmit
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

      {isloding?<button  type='button' className='btn bg-main text-white' >
        <Audio
        height="20"
        width="80"
        radius="g"
        color='white'
        ariaLabel='three-dots-loading'
        wrapperStyle
        wrapperClass/>
      </button>:<>
      <div className='d-flex align-items-center'></div>
      <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white mx-2'>Login</button> <Link className='btn' to={'/register'}>Register now</Link>
      </> }
   </form>
    </div>
    </>
  
}
