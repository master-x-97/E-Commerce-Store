import { createSlice } from "@reduxjs/toolkit";

let initialState = {counter:0}

let productslice = createSlice({
    name:"product",
    initialState,
    reducers: {
        increase:(state )=>{
            state.counter +=1
        },
        decrease : (state)=>{
            state.counter -=1
        },
        increaseByAmount : (state,action)=>{
            console.log(action);
            state.counter +=action.payload;
        },

    },
})

export let productReducer = productslice.reducer;

 export let {increase ,decrease ,increaseByAmount} = productslice.actions