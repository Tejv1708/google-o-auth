import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUser } from '../features/Auth/authSlice'


const Header = () => {
     

  const user = useSelector(state => state.auth)
  console.log(user.userInfo)

 

  return (
    <nav className=' bg-orange-600 h-12 items-center '>
        <div className='flex justify-between items-center px-2 py-4 '>
            <Link className='text-white text-lg  font-extrabold'>
            Emaily
            </Link>
            <ul className='flex items-center space-x-4'>
                <li>
                    <Link to='http://localhost:5000/auth/google' className='text-white'>Login With Google</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header