import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";     
import { Link } from "react-router-dom";
import { CartContext, cartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { CircleLoader } from "react-spinners";

// import styles from './FeatureProducts.module.css';

export default function FeatureProducts() {
  let { addToCart } = useContext(CartContext);

  async function addProductToCart(id) {
    let response = await addToCart(id);
    if(response.data.status === 'success'){
        toast.success(' product added successfuly ' ,{
          duration:4000,
          position:'top-right'
        })
    }else{
        toast.error('error added product')
    }
    console.log(response);
    
  }

  function getFeatureProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let { isLoading, isError, data, isFetching } = useQuery(
    `FeatureProducts`,
    getFeatureProducts
  );
  // console.log(data?.data.data);

  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      {isLoading ? (
        <div>
          <CircleLoader
            color="#36d7b7"
            cssOverride={{}}
            loading
            size={100}
            speedMultiplier={0.75}
            className="loadinganimate "
          />
        </div>
      ) : (
        <div className="row">
          <div className="text-center mt-2"></div>
          <>
            {data?.data.data.map((product) => (
              <div key={product._id} className="col-md-2">
                <div className="product cursor-pointer px-2 py-3">
                  <Link to={"/ProductDetails/" + product.id}>
                    <img className="w-100 " src={product.imageCover} alt="" />
                    <span className="text-main fw-bold font-sm">
                      {product.category.name}{" "}
                    </span>
                    <h3 className="h6">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </h3>
                    <div className="d-flex justify-content-between">
                      <span className="text-muted">{product.price} EGP</span>
                      <span>
                        <i className="fas fa-star rating-color "></i>
                        {product.ratingsAverage}
                      </span>
                    </div>
                  </Link>

                  <button
                    onClick={() => addProductToCart(product.id)}
                    className="btn bg-main text-white w-100"
                  >
                    {" "}
                    + Add
                  </button>
                </div>
              </div>
            ))}
          </>
        </div>
      )}
    </>
  );
}
