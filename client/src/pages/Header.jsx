import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUser, logOutUser } from '../features/Auth/authSlice'
import Payments from './Payments'


const Header = () => {
  const user = useSelector(state => state.auth)
 console.log(user.userInfo.credits)
const dispatch = useDispatch()
 function handleClick (){
   dispatch(logOutUser()) ;
 }

  return (
<<<<<<< HEAD
    <nav className="bg-orange-600 h-12 flex items-center justify-between px-4">
    <div className="flex items-center justify-between w-full">
        <Link to="/" className="text-white text-lg font-extrabold">
            Emaily
        </Link>
        {user.userInfo ? (
            <div className="flex items-center space-x-4">
                <li className="text-white text-lg font-semibold list-none bg-orange-500 py-1 px-3 rounded-md shadow-md">
                    {user.userInfo.userName}
                </li>
            </div>
        ) : (
            <ul className="flex items-center space-x-4">
=======
    <nav className=' bg-orange-600 h-12 items-center '>
        <div className='flex justify-between items-center px-2 py-4 '>
             <Link className='text-white text-lg  font-extrabold'>
            Emaily
            </Link>
            <span><Payments/></span>
            <span>Credits : {JSON.stringify(user.userInfo.credits) || 0}</span>
            {
              user.userInfo ? <button onClick={handleClick}>LogOut</button> :
            <ul className='flex items-center space-x-4'>
>>>>>>> 26a5ca8605aa415a55a3c729b3c546875ccac36c
                <li>
                    <Link to="http://localhost:5000/auth/google" className="text-white hover:underline">
                        Login With Google
                    </Link>
                </li>
            </ul>
<<<<<<< HEAD
        )}
    </div>
</nav>

=======
}
        </div>
    </nav>
>>>>>>> 26a5ca8605aa415a55a3c729b3c546875ccac36c
  )
}

export default Header