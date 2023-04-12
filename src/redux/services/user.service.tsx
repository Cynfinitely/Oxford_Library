import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

import { User, CredentialResponse } from '../../types'

const baseURL = 'TEST_URL'

export const fetchUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await axios.get(baseURL)
  if (response.status === 200) {
    const users = await response.data
    return users
  } else {
    toast.error(`Error happened : ${response.data.error}`)
    return response.status
  }
})

export const getUserById = createAsyncThunk('users/getUserById', async (userId: string) => {
  const response = await axios.get(`${baseURL}/${userId}`)
  if (response.status === 200) {
    const user = await response.data
    return user
  } else {
    toast.error(`Error happened : ${response.data.error}`)
    return response.status
  }
})

export const deleteUser = createAsyncThunk(
  'users/deleteUSer',
  async (userId: string | number | undefined) => {
    const response = await axios.delete(`${baseURL}/${userId}`)
    if (response.status === 200) {
      const fetchResponse = await axios.get(baseURL)
      const users = await fetchResponse.data
      toast.success('User Deleted Successfully')
      return users
    } else {
      toast.error(`Error happened : ${response.data.error}`)
      return response.status
    }
  }
)

export const signUp = createAsyncThunk('users/signUp', async (User: User) => {
  const response = await axios.post(`TEST:URL`, {
    first_name: User.first_name,
    last_name: User.last_name,
    email: User.email,
    password: User.password,
    image: User.image
  })

  if (response.status === 200) {
    localStorage.setItem('token', response.data.userToken)
    localStorage.setItem('userEmail', response.data.email)
    console.log('IT IS WORKING, here is the response.data', response.data)
    toast.success('User Created Successfully')
    return response.data.userToken
  } else {
    toast.error(`User Didn't Signed!! Error: ${response.data.error}`)
    console.log('ERROR: ' + response.data.error)
    throw response.data.error
  }
})

export const logIn = createAsyncThunk('users/logIn', async (User: User) => {
  const response = await axios.post(`TEST_URL`, {
    email: User.email,
    password: User.password
  })
  if (response.status === 200) {
    localStorage.setItem('token', response.data.userToken)
    localStorage.setItem('userEmail', response.data.email)
    toast.success('Logged in Successfully')
    return response.data.userToken
  } else {
    toast.error(`User Didn't Logged in!! Error: ${response.data.error}`)
    console.log('ERROR: ' + response.data.error)
    throw response.data.error
  }
})

export const handleGoogleOnSuccess = createAsyncThunk(
  'users/googleLogin',
  async (response: CredentialResponse) => {
    console.log('response:', response)
    if (response.credential) {
      const res = await axios.post(
        'TEST_URL',
        {},
        {
          headers: {
            id_token: response.credential
          }
        }
      )
      const token = res.data.token
      const userEmail = res.data.userEmail
      localStorage.setItem('token', token)
      localStorage.setItem('userEmail', userEmail)
      toast.success('Signed in with google account successfully')
    }
  }
)

export const userByEmail = createAsyncThunk('users/userByEmail', async (userEmail: string) => {
  const response = await axios.post(`TEST_URL`, {
    email: userEmail
  })
  if (response.status === 200) {
    console.log('**RESPONSE', response.data.user)
    const user = await response.data.user
    return user
  } else {
    toast.error(`Error happened : ${response.data.error}`)
    return response.status
  }
})
