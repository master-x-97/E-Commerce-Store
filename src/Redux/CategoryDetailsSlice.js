import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
export let getcategoriesDetails = createAsyncThunk('categoriesDetailsSlice/getcategoriesDetails',
async()=>{
    let x = useParams();
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/`)
    return data.data
}
)
console.log();

let initialState = {categoriesDetails:[],loading:false , isError:null}

let categoriesDetailsSlice = createSlice({
    name:'categoriesDetailsSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getcategoriesDetails.fulfilled,(state,action)=>{
            state.categoriesDetails = action.payload;
            state.loading = false;
    })
        builder.addCase(getcategoriesDetails.rejected ,(state,action)=>{
            state.isError = action.payload; 
            state.loading = false;
    })
    }
});
export let categoriesDetailsReducer = categoriesDetailsSlice.reducer  