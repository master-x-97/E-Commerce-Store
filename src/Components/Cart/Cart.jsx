import { useContext, useEffect, useState } from 'react';
// import styles from './Cart.module.css';
// import { toast, Toaster } from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";



export default function Cart() {

  let  {getLoggedUserCart , removeCartItem ,updateProductQuantity , clearItems } = useContext(CartContext); 

  const [cartDitails, setcartDitails] = useState(null);

  const [cartId, setcartId] = useState(null)
  const [numOfCartItems, setnumOfCartItems] = useState(0)
  
  async function getCart(){
    let {data} = await getLoggedUserCart();
if(data?.status === 'success'){
      console.log(data);
}
    setcartDitails(data)
  }


  async function removeItem(id){
    let {data} = await removeCartItem(id)
    setcartDitails(data)
    toast.error('product removed')
  }
  
  
  async function updateCount(id , count) {
    let {data} = await updateProductQuantity(id , count); 
    setcartDitails(data);
    
  }
  
  
  async function ClearProduct(){
     let {data} = await clearItems() 
     setcartDitails(data) 
     toast('clear list')
   }



useEffect(()=>
{getCart()
},[])
  

  return  <>
    <Helmet>
                
        <title>Cart</title>
                           
    </Helmet> 
    {cartDitails?
    <div className='bg-main-light p-4 mt-4 w-75 mx-auto'>
      <button onClick={()=>ClearProduct()} className='btn btn-dark mb-5'>Clear</button>
      <h3>shopping cart :</h3>
      <h6 className='text-main mb-5 fw-bolder'>Cart items : {cartDitails.numOfCartItems == 0? " you dont have any items" :cartDitails.numOfCartItems}</h6>

      {/* <h6 className='text-main mb-5 fw-bolder'>total cart price :{cartDitails?.data?.totalCartPrice} EGP</h6> */}
  
      
      
      {cartDitails.data?.products?.map((product)=><div key={product.product.id} className="row border-bottom py-2 align-items-center">
        <div className='col-md-1'>
          <img className='w-100 my-2' src={product.product.imageCover} alt="" />
        </div>
        <div className='col-md-11 d-flex justify-content-between'>
          <div>
  
          <h6 className='text-main' >{product.product.title.split(' ').slice(0,3).join(' ')}</h6>
          <h6 className='text-main'>price : {product.price}</h6>
          <button onClick={()=>removeItem(product.product.  id)} className='btn m-0 p-0'><i className='fa-regular fa-trash-can text-danger'></i> Remove</button>
          </div>
          <div>
            <button onClick={()=>updateCount(product.product.id,product.count+1)} className='btn border-main btn-ms'>+</button>
            <span className='mx-2'>{product.count}</span>
            <button onClick={()=>updateCount(product.product.id,product.count-1)} className='btn  border-main btn-ms'>-</button>
          </div>
  
        </div>
      </div>)}
        <h6 className='text-main mt-5 fw-bolder'>total cart price : {cartDitails.numOfCartItems == 0? " your Cart is clear" :cartDitails?.data?.totalCartPrice+' EGP'} </h6>
  
      <button className='btn bg-main my-2'>
        <Link  className='text-white' to={'/checkout'}>
          checkout
        </Link>
      </button>
    </div>
    : <div className='text-center mt-4  '> <i className='fas fa-spin fa-3x fa-spinner text-main '></i></div>}
    </>
  
}







// useEffect(()=>{
//   getCart();

// },[])
