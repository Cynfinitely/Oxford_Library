import React from 'react'
import { Link } from 'react-router-dom'

const Open = () => {
  const userToken = localStorage.getItem('token') || ''

  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed w-full h-full flex flex-col justify-center items-center ">
      <div className=" bg-white bg-opacity-80 w-1/2 h-1/2 flex flex-col justify-evenly items-center ">
        <h1 className="text-4xl font-bold italic">Welcome to Oxford Library!</h1>
        <div className="flex flex-row w-full justify-evenly items-center">
          {userToken && (
            <Link
              to={`/collections`}
              className="relative mt-5 px-6 py-2 font-bold text-white group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-2 -translate-y-2 bg-[#afa173] group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
              <span className="relative">Go to Collections</span>
            </Link>
          )}
          {!userToken && (
            <div className="flex flex-row justify-evenly items-center w-1/2">
              <Link to={`/login`} className="relative mt-5 px-6 py-2 font-bold text-white group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-2 -translate-y-2 bg-[#afa173] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
                <span className="relative">LOGIN</span>
              </Link>

              <Link to={`/register`} className="relative mt-5 px-6 py-2 font-bold text-white group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-2 -translate-y-2 bg-[#afa173] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
                <span className="relative">REGISTER</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Open
