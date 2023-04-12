import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { borrowBook, fetchBooks } from '../../redux/services/book.service'
import { addToCart } from '../../redux/slices/cartSlice'
import { AppDispatch, RootState } from '../../store'
import { Book } from '../../types'

const BookTable = () => {
  const books = useSelector((state: RootState) => state.books)
  const userToken = localStorage.getItem('token') || ''

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <div className="book_list overflow-auto">
      <table
        cellPadding={0}
        cellSpacing={0}
        className="min-w-full text-center text-sm font-light overflow-auto">
        <caption className="text-2xl text-left mb-4">Book List:</caption>
        <thead className="border-b font-medium dark:border-neutral-500">
          <th scope="col" className="px-6 py-2">
            Title
          </th>
          <th scope="col" className="px-6 py-2">
            Publisher
          </th>
          <th scope="col" className="px-6 py-2">
            Author
          </th>
          <th scope="col" className="px-6 py-2">
            Status
          </th>
          <th scope="col" className="px-6 py-2">
            Options
          </th>
        </thead>
        <tbody>
          {books.filteredBooks.length > 0 &&
            books.filteredBooks.map((book: Book) => (
              <tr
                key={book.ISBN}
                className="transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-200 dark:hover:bg-neutral-400 ">
                <td className="whitespace-nowrap px-6 py-2 font-medium">{book.title}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{book.publisher}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{book.author}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{book.status}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">
                  <button
                    onClick={() => dispatch(addToCart(book))}
                    className="mybtn1 m-1 rounded-full ">
                    Add To Cart
                  </button>
                  <button
                    onClick={() => dispatch(borrowBook({ ISBN: book.ISBN, borrowerId: userToken }))}
                    className="mybtn1 m-1 rounded-full">
                    Borrow Book
                  </button>
                </td>
              </tr>
            ))}
          {books.filteredBooks.length === 0 &&
            books.books &&
            books.books.length > 0 &&
            books.books.map((book: Book) => (
              <tr
                key={book.ISBN}
                className="transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-200 dark:hover:bg-neutral-400 ">
                <td className="whitespace-nowrap px-6 py-2 font-medium">{book.title}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{book.publisher}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{book.author}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{book.status}</td>
                <td className="whitespace-nowrap px-6 py-2 font-medium">
                  <button
                    onClick={() => dispatch(addToCart(book))}
                    className="mybtn1 m-1 rounded-full  ">
                    Add To Cart
                  </button>
                  <button
                    onClick={() => dispatch(borrowBook({ ISBN: book.ISBN, borrowerId: userToken }))}
                    className="mybtn1 m-1 rounded-full">
                    Borrow Book
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookTable
