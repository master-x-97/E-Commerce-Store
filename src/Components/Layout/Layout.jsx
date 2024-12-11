import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Offline } from "react-detect-offline";

export default function Layout({userData , setUserData ,UserToken ,setUserToken }) {


  return <>
  <div className=''>

    <Navbar UserToken={UserToken}   />
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
