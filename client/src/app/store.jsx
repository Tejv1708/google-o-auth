import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice'
import paymentSlice from '../features/payment/paymentSlice';


export const store = configureStore({
    reducer : {
      auth :  authReducer,
      payment : paymentSlice
    }
})