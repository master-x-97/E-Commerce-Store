import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let cartContext = createContext();

export function CartContextProvider(props){

    const [userData, setuserData] = useState(null)


    const [cartId, setcartId] = useState(null)
    const [numOfCartItems, setnumOfCartItems] = useState(0)

    async function getCart(){

        let response = await getLoggedUserCart();
        if(response?.data?.status === 'success'){
            setcartId(response.data.data._id)
            setnumOfCartItems(response.data.numOfCartItems)
            
            // console.log(response?.data?.numOfCartItems);
        }
    }

    useEffect(()=>{
    
        getCart();
    } , []);
    
    let headers = {
        token:localStorage.getItem('userToken')
    }


    function addToCart(x){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, 
        {

            productId:x
        },
        {
            headers: headers
        }).then((response) => response).catch((error)=>error)
    }
    
    function getLoggedUserCart(x){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, 
        {
            headers: headers
        }).then((response) => response)
        .catch((error)=>error)
    }

    function removeItem(productId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
        {
            headers: headers
        }).then((response) => response).catch((error)=>error)
    }
    function clearItems(){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, 
        {
            headers: headers
        }).then((response) => response).catch((error)=>error)
    }

    function updateProductcount(productId ,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
        {
            count:count
        },
        {
            headers: headers
        }).then((response) => response).catch((error)=>error)
    }
    // 642e5663fc6ec80008fc40bf
    function onLinePayment(cartid ,shippingAddress){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:3000
        `, 
        {
            shippingAddress:shippingAddress
        },
        {
            headers: headers
        }).then((response) => response).catch((error)=>error)
    }

        return <cartContext.Provider value={{userData,setuserData, cartId , numOfCartItems,setnumOfCartItems ,onLinePayment,addToCart , getLoggedUserCart , removeItem ,updateProductcount ,clearItems}}>
            {props.children}

        </cartContext.Provider>
}