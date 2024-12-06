import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import styles from './Layout.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { Offline, Online } from "react-detect-offline";

export default function Layout({userData , setUserData}) {
  let navigate = useNavigate()

  function logOut(){
    localStorage.removeItem("userToken")
    setUserData(null)
    navigate('/login')

  }
  return <>
  <div className=''>

    <Navbar userData={userData} logOut={logOut}/>
    <div className="container">
    <Outlet></Outlet>

    </div>
    <div className='bg-danger'>
    <Offline>your internet is not connect</Offline>
  </div>

    <Footer/>
  </div>
    </>
  
}
