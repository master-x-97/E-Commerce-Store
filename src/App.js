import './App.css';
import  { Toaster } from 'react-hot-toast';
import { Offline, Online } from "react-detect-offline";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import { createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CategoriesDetails from './Components/CategoriesDetails/CategoriesDetails';
import Brands from './Components/Brands/Brands';
import   CartContextProvider  from './Context/CartContext';
import Checkout from './Components/checkout/Checkout';
import Profile from './Components/Profile/Profile';
import { Provider } from 'react-redux';
import store from './Redux/store';
import UserContextProvider, { UserContext } from './Context/UserContext';




function App() { 

  let {setUserToken} = useContext(UserContext)

  useEffect(()=>{
    if(localStorage.getItem('userToken')!== null){
      setUserToken(localStorage.getItem('userToken'))
    }
  },[])

  const [userData , setUserData] = useState(null)

  useEffect(()=>{
    if(localStorage.getItem("userToken")){
      saveUserData()
    }
  },[])

  function saveUserData(){
    let encodedToken = localStorage.getItem('userToken')
    let decodeToken = jwtDecode(encodedToken)
    setUserData(decodeToken)
  } 

 

  let routers = createHashRouter([
    {path:'/',element:<Layout userData={userData} setUserData={setUserData}/>,children:[
      {index:true,element:<Home/> },
      {path:'products', element:<Products/> },
      {path:'brands', element:<Brands/> },
      {path:'categories', element:<ProtectedRoute><Categories/></ProtectedRoute> },
      {path:'about', element:<ProtectedRoute><About/></ProtectedRoute>},
      {path:'checkout', element:<ProtectedRoute><Checkout/></ProtectedRoute>},
      {path:'ProductDetails/:id', element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
      {path:'CategoriesDetails/:id', element:<ProtectedRoute><CategoriesDetails/></ProtectedRoute>},
      
      {path:'cart', element:<ProtectedRoute><Cart/></ProtectedRoute>},
      {path:'Profile', element:<ProtectedRoute><Profile/></ProtectedRoute>},
      {path:'login', element:<Login saveUserData={saveUserData}/>},
      {path:'register', element:<Register/>},
      {path:'*', element:<NotFound/>},
    ]}
  ]) 
  return (
    <Provider store={store}>

      
        <CartContextProvider>
          {/* <Online>Only shown when you're online</Online> */}
          <Offline>
            <div className='network bg-danger text-white'>
              you`re internet is not connect (surprise!)
            </div>
          </Offline>
          <Toaster />
          <RouterProvider router={routers}></RouterProvider>
        </CartContextProvider>

    </Provider>
  );
}

export default App;
