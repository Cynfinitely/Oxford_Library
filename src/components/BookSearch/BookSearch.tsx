import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Book, SearchSchema } from '../../types'
import { searchSchema } from '../../helpers/validationSchema'
import { bookFilter } from '../../redux/slices/bookSlice'
import { AppDispatch, RootState } from '../../store'

const BookSearch = () => {
  const [bookError, setBookError] = useState('')
  const books = useSelector((state: RootState) => state.books)
  const dispatch = useDispatch<AppDispatch>()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema)
  })

  const onSubmitBook: SubmitHandler<SearchSchema> = (data) => {
    console.log(data)
    const result = data.title
    if (result) {
      dispatch(bookFilter(result))
      setBookError('')
      const filtered: Book[] = books.books.filter((book: Book) =>
        book.title?.toLowerCase().includes(result.toLowerCase())
      )
      if (filtered.length === 0) {
        setBookError(`${result} book does not found.`)
      }
    } else {
      setBookError('Please enter a book title')
    }
  }

  return (
    <div className="flex flex-col justify-evenly items-center ">
      <form
        className="flex flex-col justify-evenly items-center"
        onSubmit={handleSubmit(onSubmitBook)}>
        <label className="mb-2">Search Book by Title:</label>
        <input
          type="text"
          id="title"
          placeholder="title?"
          className="mb-2 w-1/2"
          {...register('title')}
        />
        {errors.title && (
          <p className="text-xs italic text-red-500 mt-2">{errors.title?.message}</p>
        )}
        {bookError && <p className="text-xs italic text-red-500 mt-2">{bookError}</p>}

        <button type="submit" className="mybtn1 mt-2">
          Search
        </button>
      </form>
    </div>
  )
}

export default BookSearch
