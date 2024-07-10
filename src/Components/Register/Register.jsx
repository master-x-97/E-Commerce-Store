import { useFormik } from 'formik';
import React, {  useState } from 'react'
// import styles from './Register.module.css';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export default function Register() {
  let navigate =  useNavigate();
  const [isloding, setisloding] = useState(false)
  
  async function handleRegister(values){
    
    setisloding(true)
    
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
    console.log(values);
    console.log(data);
  
    if(data.message === 'success'){
      console.log(data);
      setisloding(false)
      navigate('/login')
    }
  }
  

let validation = Yup.object({
  name:Yup.string().required('name is required').min(5 , 'name minlenght is 5').max(30 , 'name is maxlengh is 30'),
  email:Yup.string().required('email is required').email('email is invalid'),
  password:Yup.string().min(5 , 'name minlenght is 5').max(30 , 'name is maxlengh is 30').required('password is required').matches(/^[A-Z][a-z0-9]{5,30}$/ ,"password must start with uppercase and should be inclode a number"),
  rePassword:Yup.string().required('repassword is required').oneOf([Yup.ref('password')] ,'password and repassword doesnt match '),
  phone:Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/ ,"phone must be egyption number"),
})

let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    validationSchema:validation,
    onSubmit:(values)=> handleRegister(values)
  });
  return <>
    <div className="w-75 mx-auto py-4">
      <h3>Register Now :</h3>
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="name">Name :</label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.name} type="text" name='name' id='name' />
      {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>{formik.errors.name}</div>:null}

      <label htmlFor="email">Email :</label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.email} type="email" name='email' id='email' />
      {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div>:null}

      <label htmlFor="password">Password :</label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.password} type="password" name='password' id='password' />
      {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div>:null}

      <label htmlFor="rePassword">repassword :</label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.rePassword} type="password" name='rePassword' id='rePassword' />
      {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger'>{formik.errors.rePassword}</div>:null}

      <label htmlFor="phone">phone :</label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.phone} type="tel" name='phone' id='phone' />
      {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>{formik.errors.phone}</div>:null}

      {isloding?<button  type='button' className='btn bg-main text-white'><i className='fa fa-spinner fa-spin'></i></button>:<button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Register</button> }
   </form>
    </div>
    </>
  
}
