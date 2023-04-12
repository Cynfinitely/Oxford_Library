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

const Contact = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: any) => {
    const fields = { fields: data }
    console.log(fields)
  }

  return (
    <React.Fragment>
      <h1 className="text-center text-4xl font-semibold mt-10">Contact Us</h1>
      <form className="max-w-xl m-auto py-10 mt-10 px-12 border" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-gray-600 font-medium">Your Email</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          placeholder="Your email address"
          autoFocus
          {...register('email')}
        />

        <label className="text-gray-600 font-medium block mt-4">Your Name</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text"
          placeholder="Your name"
          {...register('name')}
        />

        <label className="text-gray-600 font-medium block mt-4">Anything you want to say?</label>
        <textarea
          className="border-solid border-gray-300 border py-20 px-4 w-full rounded text-gray-700"
          rows={5}
          cols={5}
          {...register('description')}
        />
        <button
          className="mybtn1 mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit">
          Submit
        </button>
      </form>
    </React.Fragment>
  )
}

export default Contact
