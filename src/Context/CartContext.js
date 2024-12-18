import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext();

let userToken = localStorage.getItem("userToken");

let headers = {
  token: userToken,
};

function addToCart(id) {
  return axios
    .post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: id,
      },
      {
        headers: headers,
      }
    )
    .then((response) => response)
    .catch((error) => error);
}

function getLoggedUserCart() {
  return axios
    .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: headers,
    })
    .then((response) => response)
    .catch((error) => error);
}

function removeCartItem(productId) {
  return axios
    .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      headers: headers,
    })
    .then((response) => response)
    .catch((error) => error);
}

async function updateProductQuantity(productId, count) {
  return axios
    .put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        count,
      },
      { headers }
    )
    .then((response) => response)
    .catch((error) => error);
}

async function clearItems() {
    return axios
    .delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: headers,
    })
    .then((response) => response)
    .catch((error) => error);
}

export default function CartContextProvider(props) {
  return (
    <CartContext.Provider
      value={{
        addToCart,
        getLoggedUserCart,
        removeCartItem,
        updateProductQuantity,
        clearItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
