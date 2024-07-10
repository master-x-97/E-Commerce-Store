
import React from 'react'
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { UserContext } from '../../Context/UserContext';
import styles from './Profile.module.css';

export default function Profile() {

  let {userData}= useContext(cartContext)


  
  return <>
    <h2>Profile</h2>
    <h2>hello : {userData?.name}</h2>
    <h2>your email : {userData?.email}</h2>
    <h2>your position : {userData?.role}</h2>

    </>
  
}
