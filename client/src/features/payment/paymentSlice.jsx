import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    token : {} ,
    isLoading : false ,
    error : null 
}

 export const handleToken = createAsyncThunk(
    'payment/token' ,
    async(token , thunkAPI) => {
        try{
            console.log(token)
            const res = await axios.post('/api/stripe', token) ;
            
             return res 
        }catch(err){
            return thunkAPI.rejectWithValue(err)
        }
    }
 )


 const paymentSlice = createSlice(
    {
       name :  'payment',
        initialState,
        extraReducers : (builder) => {
            builder.addCase(handleToken.pending , (state) => {
                state.isLoading = true 
            })
            .addCase(handleToken.fulfilled , (state , action) => {
                state.isLoading = false
                state.token = action.payload 
            
            })
            .addCase(handleToken.rejected , (state , action)=> {
                state.isLoading = false
                state.error = action.message.error
            })
        }
    }
 )

 export default paymentSlice.reducer