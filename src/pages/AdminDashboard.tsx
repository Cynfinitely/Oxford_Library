import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { AppDispatch, RootState } from '../store'
import { fetchBooks } from '../redux/services/book.service'
import { fetchUsers } from '../redux/services/user.service'
import BookTable from '../components/BookTable/BookTable'
import UserTable from '../components/UserTable/UserTable'
import BookSearch from '../components/BookSearch/BookSearch'
import UserSearch from '../components/UserSearch/UserSearch'

const AdminDashboard = () => {
  const users = useSelector((state: RootState) => state.users)
  const books = useSelector((state: RootState) => state.books)

  const dispatch = useDispatch<AppDispatch>()

  console.log('here is the useEffect FilteredBooks', books.filteredBooks)

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchBooks())
    console.log('here is the useEffect ', users.users)
  }, [])

  return (
    <div className="flex justify-center text-center items-center w-full h-full">
      <div className="admin   border border-dark m-5 p-2 w-full h-full">
        <div className="p-3 w-full h-full">
          <h1 className="text-4xl">ADMIN DASHBOARD</h1>
          <div className="flex flex-row justify-evenly ">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <div className="overflow-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <BookTable />
                  </div>
                </div>
                <div className="flex flex-col m-5 justify-evenly">
                  {' '}
                  <Link to="/addProduct">
                    <button className="mybtn1 w-full">Add Book</button>
                  </Link>
                  <button className="mybtn1" onClick={() => dispatch(fetchBooks())}>
                    Get All Books
                  </button>
                  <BookSearch />
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <UserTable />
                  </div>
                </div>
                <div className="flex flex-col m-5 justify-evenly items-stretch">
                  {' '}
                  <Link to="/createUser">
                    <button className="mybtn2 w-full">Create User</button>
                  </Link>
                  <button className="mybtn2" onClick={() => dispatch(fetchUsers())}>
                    Get All Users
                  </button>{' '}
                  <UserSearch />
                </div>
              </div>
            </div>
          </div>

          <div className="user_list"></div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
