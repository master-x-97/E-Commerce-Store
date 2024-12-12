import React from 'react'
import { Navigate } from 'react-router-dom';
// import styles from './ProtectedRoute.module.css';

export default function ProtectedRoute(props) {
  // console.log(props.children);
 if(localStorage.getItem('userToken') !== null){
   return props.children
  }
  else
  {
    return <Navigate to={'/login'} />
  }
  
}
