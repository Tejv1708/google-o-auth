import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUser } from '../features/Auth/authSlice'


const Header = () => {
     

  const user = useSelector(state => state.auth)
  console.log(user.userInfo)

 

  return (
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
                <li>
                    <Link to="http://localhost:5000/auth/google" className="text-white hover:underline">
                        Login With Google
                    </Link>
                </li>
            </ul>
        )}
    </div>
</nav>

  )
}

export default Header