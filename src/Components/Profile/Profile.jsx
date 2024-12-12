
import React, { useContext} from 'react'
// import styles from './Profile.module.css';
import { UserContext } from '../../Context/UserContext';
export default function Profile() {
let {UserToken} = useContext(UserContext)

  
  return <>
    <h2>Profile</h2>
    <h2>hello : {UserToken?.name}</h2>
    <h2>your email : {UserToken?.email}</h2>
    <h2>your position : {UserToken?.role}</h2>  

    </>
  
}
