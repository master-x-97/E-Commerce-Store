import { configureStore } from "@reduxjs/toolkit";
import { categoriesDetailsReducer } from "./CategoryDetailsSlice";
import { categoriesReducer } from "./CategorySlice";
import { productReducer } from "./Productslice";






// todo : add reducer
 let store = configureStore({
    reducer:{
        productred : productReducer, // باخد الاول من ال سلايز واعمله امبورت والتاني بوديه لليوز سيلكتور
        categories:categoriesReducer,
        categoriesDetailsSelector:categoriesDetailsReducer
        
    }
})

export default store