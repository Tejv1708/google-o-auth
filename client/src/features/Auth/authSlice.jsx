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

export const logOutUser = createAsyncThunk(
    'auth/logout' ,
    async(_,thunkAPI) => {
        try{
         await axios.get('/api/logout')   
        }catch(err){
            console.log('Error Occured ' , err);
            return thunkAPI.rejectWithValue(err.response.data.error)

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
            .addCase(logOutUser.pending , (state ) => {
                state.isLoading = true 
            })
            .addCase(logOutUser.fulfilled , (state , action) => {
                state.isLoading = false 
                state.userInfo = null ;
                state.error = null ;
            })
            .addCase(logOutUser.rejected , (state , action ) => {
                state.isLoading = false ;
                state.error =  action.error.message
            })
        }
    }
)



export  default authSlice.reducer