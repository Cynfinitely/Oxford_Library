import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { AppDispatch, RootState } from '../store'
import { handleGoogleOnSuccess, logIn } from '../redux/services/user.service'
import { userValues, CredentialResponse, LoginValidationSchema } from '../types'
import { loginSchema } from '../helpers/validationSchema'
import userName from '../utils/userName'

const Login = () => {
  const { token } = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch<AppDispatch>()
  const userToken = localStorage.getItem('token') || ''

  const GoogleLoginSuccess = async (response: CredentialResponse) => {
    await dispatch(handleGoogleOnSuccess(response))
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginValidationSchema>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<LoginValidationSchema> = async (data: userValues) => {
    const user = {
      email: data.email,
      password: data.password
    }
    await dispatch(logIn(user))
    if (token) {
      console.log('It is worked , here is the user token', token)
    }
  }

  return (
    <div className=" w-screen h-full flex items-center justify-center">
      {userToken && (
        <div className="flex flex-col justify-evenly items-center w-1/2 h-1/2">
          <h1 className="text-4xl">Hi {userName}!</h1>
          <p>You have been already logged.</p>
          <Link to={`/`} className="mybtn1 ">
            Home
          </Link>
        </div>
      )}

      {!userToken && (
        <div className="p-20 w-1/2 h-3/4  flex flex-col  justify-evenly  items-center ">
          <h1 className="text-8xl text-center mb-4 ">LOGIN</h1>
          <div className="flex flex-col justify-center md:flex-row h-full ">
            <div className="flex flex-col justify-center w-25 pb-2 md:pb-0 border-b-4 border-dashed md:border-r-4 md:border-b-0 border-black md:pr-4">
              <form className="flex flex-col  items-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col justify-center items-center my-2">
                  <label htmlFor="email">Email</label>
                  <div className="flex flex-col ">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-xs italic text-red-500 mt-2">{errors.email?.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center my-2">
                  <label htmlFor="password">Password</label>
                  <div className="flex flex-col">
                    <input
                      type="password"
                      id="password"
                      placeholder="Your Password "
                      {...register('password')}
                    />
                    {errors.password && (
                      <p className="text-xs italic text-red-500 mt-2">{errors.password?.message}</p>
                    )}
                  </div>
                </div>

                <div className="my-2">
                  <button type="submit" className="mybtn1 mt-2 w-fit">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center md:pl-4">
              <p className="text-sm mb-2">If you dont have an account: </p>
              <Link
                to={`/register`}
                className="mybtn2  flex text-center items-center justify-center w-max mb-2">
                Sign UP
              </Link>
              <p className="my-4">Login with Google</p>
              <GoogleLogin
                onSuccess={GoogleLoginSuccess}
                onError={() => {
                  console.log('Login Failed')
                }}
              />
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="bottom-right" theme="light" />
    </div>
  )
}

export default Login
