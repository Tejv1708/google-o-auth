import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userInfo : null,
    error: null ,
    isLoading : false 
} 


export const fetchUser = createAsyncThunk(
    'auth/user' ,
    async( _,thunkAPI) => {
        try{
     const user = await axios.get('/api/current_user') ;
     console.log(user.data.userName)
      return user.data ;
    }
    catch(error){
        console.log('Error Occured'  , error.response)
    return thunkAPI.rejectWithValue(error.response.data.errors) ;
}
}
)

const authSlice = createSlice(
    {
        name : 'auth',
        initialState ,
        extraReducers : (builder) => {
            builder.addCase(fetchUser.pending , (state ) => {
                state.isLoading = true 
            })
            .addCase(fetchUser.fulfilled , (state , action) => {
                state.isLoading = false 
                console.log(action.payload)
                state.userInfo = action.payload ;
                state.error = null ;
                console.log(state)
            })
            .addCase(fetchUser.rejected , (state , action) => {
                state.isLoading= false
                state.error = action.error.message 
            })
        }
    }
)



export  default authSlice.reducer