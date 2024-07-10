import { useContext, useEffect, useState } from 'react';
// import styles from './Cart.module.css';
// import { toast, Toaster } from 'react-hot-toast';
import { cartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";


export default function Cart() {

  let  {getLoggedUserCart , removeItem ,updateProductcount ,clearItems} = useContext(cartContext); 

  const [cartDitails, setcartDitails] = useState(null);

  const [cartId, setcartId] = useState(null)
  const [numOfCartItems, setnumOfCartItems] = useState(0)
  
  async function getCart(){
    let response = await getLoggedUserCart();
    if(response?.data?.status === 'success'){
      console.log(response);
      setcartDitails(response.data.data)
    }
  }


  async function deleteItem(productId){
    let response = await removeItem(productId)
    setcartDitails(response.data.data)
    toast('product removed')
    // console.log(response);
    // console.log(productId);
  }
  // async function ClearProduct(){
  //   let response = await clearItems()
  //   setcartDitails(response.data.data)
  //   toast('clear list')
  // }


  async function updateProductQuantity(productId , count){
    let response = await updateProductcount(productId,count)
    if(count <= 0){
      deleteItem(productId)

    }else{
      setcartDitails(response.data.data)
      
      toast('product count updated')
    }
    
    // console.log(response);
    // console.log(productId);
  }


useEffect(()=>
{getCart()
},[])
  

  return  <>
    <Helmet>
                
        <title>Cart</title>
                           
    </Helmet> {cartDitails !== null?  
    <div className='bg-main-light p-4 mt-4'>
      {/* <button onClick={()=>ClearProduct()} className='btn btn-dark mb-5'>Clear</button> */}
      <h3>shop cart :</h3>
      <h6 className='text-main mb-5'>total cart price :{cartDitails.totalCartPrice} EGP</h6>
  
      
      
      {cartDitails?.products?.map((product)=><div key={product.product._id} className="row border-bottom py-2 align-items-center">
        <div className='col-md-1'>
          <img className='w-100 my-2' src={product.product.imageCover} alt="" />
        </div>
        <div className='col-md-11 d-flex justify-content-between'>
          <div>
  
          <h6 className='text-main' >{product.product.title}</h6>
          <h6 className='text-main'>price : {product.price}</h6>
          <button onClick={()=>deleteItem(product.product._id)} className='btn m-0 p-0'><i className='fa-regular fa-trash-can text-danger'></i> Remove</button>
          </div>
          <div>
            <button onClick={()=>updateProductQuantity(product.product._id,product.count+1)} className='btn border-main btn-ms'>+</button>
            <span className='mx-2'>{product.count}</span>
            <button onClick={()=>updateProductQuantity(product.product._id,product.count-1)} className='btn  border-main btn-ms'>-</button>
          </div>
  
        </div>
  
      </div>)}
  
      <button className='btn bg-main my-2'>
        <Link  className='text-white' to={'/checkout'}>
          checkout
        </Link>
      </button>
    </div>
    : <div className='text-center mt-4'> <i className='fas fa-spin fa-3x fa-spinner text-main '></i></div>}
    </>
  
}







// useEffect(()=>{
//   getCart();

// },[])
