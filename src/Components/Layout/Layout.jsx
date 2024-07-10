import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import styles from './Layout.module.css';
import { Outlet, useNavigate } from 'react-router-dom';

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


    <Footer/>
  </div>
    </>
  
}
