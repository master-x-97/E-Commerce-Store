import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getCategories = createAsyncThunk('categorySlice/getCategories',
async ()=>{
   let {data} = await  axios.get("https://ecommerce.routemisr.com/api/v1/categories")
   return data.data;
}
)

let initialState = {Categories:[] , loading: false ,isError:null };
let CategorySlice = createSlice({
    name:'categorySlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            state.Categories = action.payload;
            state.loading = false;
    })
        builder.addCase(getCategories.rejected ,(state,action)=>{
            state.isError = action.payload; 
            state.loading = false;
    })
    }
    // extraReducers:{
    //     [getCategories.pending]:(state,action)=>{   // الداتا لسه مجتش
    //         state.loading = true;
    //     },
    //     [getCategories.fulfilled]:(state,action)=>{  // الداتا جت وكله تمام
    //         state.Categories = action.payload;
    //         state.loading = false;
    //     },
    //     [getCategories.rejected]:(state,action)=>{ // في error في الموضوع
    //         // state.isError = action.payload; 
    //         state.loading = false;
    //     },


 
});

export let categoriesReducer =  CategorySlice.reducer