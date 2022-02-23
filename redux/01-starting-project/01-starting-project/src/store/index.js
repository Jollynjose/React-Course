import { createSlice, configureStore} from '@reduxjs/toolkit'
import counterSlice from './counter';
import authSlice from './auth'





const store = configureStore({
   reducer: {
       counter: counterSlice.reducer, 
       auth: authSlice.reducer
    }

});
export const CounterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;
