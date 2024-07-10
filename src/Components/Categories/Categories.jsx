import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/CategorySlice";
// import styles from './Categories.module.css';
import { CircleLoader } from "react-spinners";
import { Link } from "react-router-dom";



export default function Categories() {
  let { loading, isError, Categories } = useSelector(
    (state) => state.categories
  );
  console.log(loading);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  console.log(Categories);
  return (
    <>
      {loading ? (
        <div className="loading">
          <CircleLoader
            color="#36d7b7"
            cssOverride={{}}
            loading
            size={100}
            speedMultiplier={0.75}
          />
        </div>
      ) : (
        <div className="row">
          {Categories.map((category) => (
            <div  className="col-md-3" >
              <div className="categorys w-100 h-100 cursor-pointer">
                <Link to={`/CategoriesDetails/${category._id}`}>
                <img
                  className="w-100 h-100  py-5"
                  src={category.image}
                  alt=""
                />
                <h6>{category._id}</h6>
                
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
