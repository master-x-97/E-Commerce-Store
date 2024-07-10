import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getcategoriesDetails } from '../../Redux/CategoryDetailsSlice';
import styles from './CategoriesDetails.module.css';
import { CircleLoader } from "react-spinners";
import { useParams } from 'react-router-dom';


export default function CategoriesDetails() {
let params = useParams()
  let {categoriesDetails,loading,isError} = useSelector((state)=>state.categoriesDetailsSelector );
  console.log(categoriesDetails);

let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getcategoriesDetails());

  },[]); 
  return <>
    {loading?
        <div className="loading">
          <CircleLoader
            color="#36d7b7"
            cssOverride={{}}
            loading
            size={100}
            speedMultiplier={0.75}
          />
        </div>
      :'' }

    </>
}
  
