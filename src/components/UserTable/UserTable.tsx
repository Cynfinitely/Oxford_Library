import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteUser, fetchUsers } from '../../redux/services/user.service'
import { AppDispatch, RootState } from '../../store'

const UserTable = () => {
  const users = useSelector((state: RootState) => state.users)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUsers())
    console.log('here is the useEffect ', users.users)
  }, [])

  return (
    <div className="user_list overflow-hidden">
      <table cellPadding={0} cellSpacing={0} className="min-w-full text-center text-sm font-light">
        <caption className="text-2xl text-left mb-4">User List:</caption>
        <thead className="border-b font-medium dark:border-neutral-500">
          <th scope="col" className="px-6 py-2">
            First Name
          </th>
          <th scope="col" className="px-6 py-2">
            Last Name
          </th>
          <th scope="col" className="px-6 py-2">
            Email
          </th>
          <th scope="col" className="px-6 py-2">
            Password
          </th>
          <th scope="col" className="px-6 py-2">
            Role
          </th>
          <th scope="col" className="px-6 py-2">
            Options
          </th>
        </thead>
        <tbody>
          {users.filteredUsers.length > 0 &&
            users.filteredUsers.map((user) => (
              <tr
                key={user._id}
                className="transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-200 dark:hover:bg-neutral-400 ">
                <td className="whitespace-nowrap px-6 py-2 font-medium">{user.first_name}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{user.last_name}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{user.email}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{user.password}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{user.role}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">
                  <button onClick={() => dispatch(deleteUser(user._id))} className="mybtn2 m-1">
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          {users.filteredUsers.length === 0 &&
            users.users &&
            users.users.length > 0 &&
            users.users.map((user) => (
              <tr
                key={user._id}
                className="transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-200 dark:hover:bg-neutral-400 ">
                <td className="whitespace-nowrap px-6 py-2 font-medium">{user.first_name}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{user.last_name}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{user.email}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{user.password}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{user.role}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">
                  <button onClick={() => dispatch(deleteUser(user._id))} className="mybtn2 m-1">
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
