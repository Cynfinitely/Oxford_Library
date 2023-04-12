import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { AppDispatch, RootState } from '../../store'
import { SearchSchema, User } from '../../types'
import { searchSchema } from '../../helpers/validationSchema'
import { userFilter } from '../../redux/slices/userSlice'

const UserSearch = () => {
  const [userError, setUserError] = useState('')
  const users = useSelector((state: RootState) => state.users)

  const dispatch = useDispatch<AppDispatch>()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema)
  })

  const onSubmitUser: SubmitHandler<SearchSchema> = (data) => {
    console.log(data)
    const result = data.first_name
    if (result) {
      dispatch(userFilter(result))
      setUserError('')
      const filteredUsers: User[] = users.users.filter((user: User) =>
        user.first_name?.toLowerCase().includes(result.toLowerCase())
      )
      if (filteredUsers.length === 0) {
        setUserError(`${result} user does not found.`)
      }
    } else {
      setUserError('Please enter a user name')
    }
  }
  return (
    <div className="flex flex-col">
      <form
        className="flex flex-row justify-evenly items-center"
        onSubmit={handleSubmit(onSubmitUser)}>
        <label className="mb-2">Search User by Name:</label>
        <input
          type="text"
          id="first_name"
          placeholder="first_name"
          className="mb-2"
          {...register('first_name')}
        />
        {errors.first_name && (
          <p className="text-xs italic text-red-500 mt-2">{errors.first_name?.message}</p>
        )}
        {userError && <p className="text-xs italic text-red-500 mt-2">{userError}</p>}

        <button type="submit" className="mybtn1 mt-2">
          Search
        </button>
      </form>
    </div>
  )
}

export default UserSearch
