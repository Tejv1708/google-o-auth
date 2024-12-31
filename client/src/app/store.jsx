import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice'
<<<<<<< HEAD
import todoSlice from '../features/todoSlice';
=======
import paymentSlice from '../features/payment/paymentSlice';
>>>>>>> 26a5ca8605aa415a55a3c729b3c546875ccac36c


export const store = configureStore({
    reducer : {
      auth :  authReducer,
<<<<<<< HEAD
      todos : todoSlice
=======
      payment : paymentSlice
>>>>>>> 26a5ca8605aa415a55a3c729b3c546875ccac36c
    }
})