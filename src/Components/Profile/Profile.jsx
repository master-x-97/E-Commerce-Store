
import React, { useContext} from 'react'
// import styles from './Profile.module.css';
import { UserContext } from '../../Context/UserContext';
import jwtDecode from 'jwt-decode';



export default function Profile() {
  let {userData}=  useContext(UserContext)
let encodeedToken = localStorage.getItem('userToken')
let decoded =  jwtDecode(encodeedToken)

  
  return <>
  <div className='  '>

      <h2 className='text-main fw-bolder mt-5  ' >Profile</h2>
      <h2 className='text-main fw-bolder mt-5 '> Name : {decoded.name}</h2>
      <h2 className='text-main fw-bolder  mt-5'>your Email : {userData?.email}</h2>
      <h2 className='text-main fw-bolder mt-5'>your position : {decoded.role}</h2>  




  </div>

    </>
  
}
