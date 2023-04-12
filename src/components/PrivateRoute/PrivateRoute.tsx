import { Link } from 'react-router-dom'
import React from 'react'

export { PrivateRoute }

function PrivateRoute({ children }: { children: React.ReactElement }) {
  const userToken = localStorage.getItem('token') || ''

  if (!userToken) {
    return (
      <div className="flex justify-center text-center items-center w-full h-full ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold italic mb-6">
            Please Sign-in to see collections and profile.
          </h1>
          <div className="flex flex-row justify-evenly items-center w-1/2">
            <Link to={`/login`}>
              <button className="mybtn1">Login</button>
            </Link>
            <Link to={`/register`}>
              <button className="mybtn1">Register</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // authorized so return child components
  return children
}

export default PrivateRoute
