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
                <li>
                    <Link to='http://localhost:5000/auth/google' className='text-white'>Login With Google</Link>
                </li>
            </ul>
}
        </div>
    </nav>
  )
}

export default Header