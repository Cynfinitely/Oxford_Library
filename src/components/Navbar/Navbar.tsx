import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userName from '../../utils/userName'

const Navbar = () => {
  const userToken = localStorage.getItem('token') || ''
  const userEmail = localStorage.getItem('userEmail') || ''
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userEmail')
    navigate('/login')
  }

  return (
    <div className="border-2 border-y-black w-full h-24 bg-[#fdffbe] py-2 px-4 lg:px-8 lg:py-4 flex items-center justify-between  text-black">
      <div className="flex items-center justify-between ">
        <Link
          to={`/profile`}
          className=" mr-4 cursor-pointer py-1  text-m   sm:text-lg sm:font-black font-thin">
          <span className="italic">Welcome , {userName}</span>
        </Link>
        <ul className="ml-5 mb-4 mt-2 flex flex-col gap-4 md:gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
          <li className="text-sm  p-1 font-normal">
            <Link to={`/`} className="relative px-6 py-2 font-bold text-white group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-2 -translate-y-2 bg-[#afa173] group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
              <span className="relative">Home</span>
            </Link>
          </li>
          {userEmail === 'celalyasinnari@gmail.com' && (
            <li className="text-sm  p-1 font-normal">
              <Link
                to={`/adminDashboard`}
                className="relative px-6 py-2 font-bold text-white group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-2 -translate-y-2 bg-[#afa173] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
                <span className="relative">Admin Dashboard</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="flex items-center md:ml-12 justify-between">
        {userToken ? (
          <button onClick={handleLogout} className="relative px-6 py-2 font-bold text-white group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-2 -translate-y-2 bg-[#afa173] group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
            <span className="relative">Logout</span>
          </button>
        ) : (
          <>
            <Link
              to={`/login`}
              className="relative px-2 py-2 md:px-6 md:py-2 font-bold text-white group mx-2">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-2 -translate-y-2 bg-[#afa173] group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
              <span className="relative">Login</span>
            </Link>
            <Link
              to={'/register'}
              className="relative px-2 py-2 md:px-6 md:py-2 font-bold text-white group mx-2">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-2 -translate-y-2 bg-[#afa173] group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
              <span className="relative">Register</span>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
