import express from 'express'
import Todo from '../models/Todo.js'
const routes = express.Router() ;

routes.get('/todos' ,async (req , res) => {
    try{
    const allTodo = await Todo.find() ;
    return res.status(200).json(allTodo)
    }catch(err){
        return res.status(500).json({ 'Error' : err})
    }
})

routes.post('/todos' , async (req , res) => {
    console.log('Body : ' , req.body)
    try{
    const createTodo = await Todo.create(req.body)
    return res.status(201).json(createTodo)
    }catch(err){
        return res.status(500).json({ 'Error' : err}) 
    }
})

routes.get('/todos/:id' , async(req , res) => {
    try{
    console.log('Single todo Id ' , req.params) ;
    const SingleTodo = await Todo.findById(req.params.id) ;
    return res.status(200).json(SingleTodo);
    }catch(err){
        return res.status(500).json({'Error' : err})
    }
})

routes.delete('/todos/:id' , async(req , res) => {
    try{
    await Todo.findByIdAndDelete(req.params.id);
    return res.status(204).json('Item is deleted')
    }catch(err){
        return res.status(500).json('Error : ' , err )
    }
})

routes.delete('/todos' , async(req , res) => {
    try{
        await Todo.deleteMany() ;
    }
    catch(err){
        return res.status(500).json('Error : ' , err)
    }
})

// routes.patch('/todos/:id' , async(req , res) => {
//     const 
// })

export default routes;