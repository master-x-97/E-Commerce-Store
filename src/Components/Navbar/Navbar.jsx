import React, { useContext } from "react";
// import styles from './Navbar.module.css';
import logo from "../../assets/images/freshcart-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";



export default function Navbar() {
  let { numOfCartItems } = useContext(CartContext);
  // let { counter } = useSelector((state) => state.productred);
  let { UserToken  ,setUserToken} = useContext(UserContext)

  let navigate = useNavigate()
  function logOut(){
    localStorage.setItem("userToken" , null)
    setUserToken(null)
    navigate('/login')

  }

  return <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light  ">
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />

        </Link>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          {UserToken !== null?          <>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="brands">
              Brands
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="categories">
              Categories
            </Link>
          </li>
          </>:''}

        </ul>


        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className=" navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <i className="fab mx-2 fa-facebook"></i>
              <i className="fab mx-2 fa-twitter"></i>
              <i className="fab mx-2 fa-instagram"></i>
              <i className="fab mx-2 fa-tiktok"></i>
              <i className="fab mx-2 fa-linkedin"></i>
              <i className="fab mx-2 fa-youtube"></i>
            </li>
            {UserToken === null ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item position-relative">
                  <Link className="nav-link p-2" to="cart">
                    <i className="fas fa-shopping-cart fa-lg"></i>
                    <span className="badge bg-main text-white ms-1 position-absolute top-0 end-0 ">
                      {numOfCartItems}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="profile">
                    profile
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link cursor-pointer" onClick={()=>logOut()}>
                    Logout
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  </>
    ;
}
