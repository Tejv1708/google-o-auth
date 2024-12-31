import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice'
import todoSlice from '../features/todoSlice';


export const store = configureStore({
    reducer : {
      auth :  authReducer,
      todos : todoSlice
    }
})