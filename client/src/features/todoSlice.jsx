import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    todo :{},
    error: null ,
    isLoading : false 
}

export const createTodo = createAsyncThunk(
    'todo/list',
   async (todoData, thunkAPi) => {
    try{
        const todos = await axios.post('/api/todos' , todoData )
        console.log('todo Data : ', todoData)
        return todos ;
    }
    catch(err)
    {
        console.log(err) ;
        return thunkAPi.rejectWithValue(err)
    }
}

)

const todoSlice = createSlice(
    {
        name : 'todos',
        initialState ,
        extraReducers : (builder) => {
            builder.addCase(createTodo.pending , (state) => {
                state.isLoading = true 
            })
            .addCase(createTodo.fulfilled , (state , action) => {
                state.isLoading = false ,
                state.todo = action.payload ;
            })
            .addCase(createTodo.rejected , (state , action) => {
                state.isLoading= false
                state.error = action.error.message 
            })
        }
    }
)



export  default todoSlice.reducer