import './App.css'
import { Routes , Route } from 'react-router'
import Landing from './pages/Landing'
import Survey from './pages/Survey'
import Header from './pages/Header'
import Dashboard from './pages/Dashboard'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from './features/Auth/authSlice'
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  } , [dispatch])

  return (
//  <a href="http://localhost:5000/auth/google">Sign In With Google</a>
<div>
 <Routes>
  <Route  element = {<Header/>} path='/'/>
  <Route element = {<Survey/>} path = '/surveys'/>
  <Route element = {<Dashboard/>} path='/dashboard'/>
 </Routes>
</div>
  )
} 

export default App
