import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState:{counter: 0, showToggle: true},
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showToggle= !state.showToggle;
        }
    }
});
export default counterSlice;