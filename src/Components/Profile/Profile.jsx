
import React, { useContext, useEffect } from 'react'
import styles from './Profile.module.css';
import { UserContext } from '../../Context/UserContext';
export default function Profile() {
let {userData} = useContext(UserContext)

  
  return <>
    <h2>Profile</h2>
    <h2>hello : {userData?.name}</h2>
    <h2>your email : {userData?.email}</h2>
    <h2>your position : {userData?.role}</h2>  

    </>
  
}
