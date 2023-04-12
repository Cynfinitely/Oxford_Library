import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

import { Book } from '../../types'

const baseURL = 'TEST_URL'

export const fetchBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get('https://run.mocky.io/v3/2c7de12a-f5e0-4ff3-ad1e-c4397ba529ed')
  if (response.status === 200) {
    const books = await response.data
    return books
  } else {
    toast.error(`Error happened : ${response.data.error}`)
    return response.status
  }
})

export const deleteBooks = createAsyncThunk(
  'books/deleteBooks',
  async (bookId: string | number) => {
    const response = await axios.delete(`TEST/${bookId}`)
    if (response.status === 200) {
      toast.success('book Deleted Successfully')
      const booksFetch = await axios.get(baseURL)
      const books = booksFetch.data
      return books
    } else {
      toast.error(`Error happened : ${response.data.error}`)
      return response.status
    }
  }
)

export const getBookById = createAsyncThunk('books/getBookById', async (bookId: string) => {
  const response = await axios.get(`${baseURL}/${bookId}`)
  if (response.status === 200) {
    const book = await response.data
    return book
  } else {
    toast.error(`Error happened : ${response.data.error}`)
    return response.status
  }
})

export const updateBook = createAsyncThunk(
  'books/updateBook',
  async ({ bookId, values }: { bookId: string; values: Book }) => {
    const response = await axios.put(`TEST_URL/${bookId}`, values)
    if (response.status === 200) {
      toast.success('Book Updated Successfully')
      const book = response.data
      return book
    } else {
      toast.error(`Book Didn't Updated! Error: ${response.data.error}`)
      return response.status
    }
  }
)

export const addBook = createAsyncThunk('books/addBook', async (book: Book) => {
  const response = await axios.post('TEST_URL', {
    title: book.title,
    description: book.description
  })
  if (response.status === 201) {
    toast.success('Book added Successfully')
    console.log(response.data)
    return response.data
  } else {
    toast.error(`Book Didn't Created!! Error: ${response.data.error}`)
    console.log('ERROR: ' + response.data.error)
    return response.status
  }
})

export const borrowBook = createAsyncThunk(
  'books/borrowBook',
  async ({ ISBN, borrowerId }: Partial<Book>) => {
    console.log(`ISBN:${ISBN},BorrowerId:${borrowerId}`)
    const response = await axios.patch(`${baseURL}/api/v1/books/${ISBN}`, {
      borrowerId: borrowerId,
      borrowDate: new Date(Date.now())
    })
    if (response.status === 200) {
      toast.success('You Borrowed Book!')
      return response.data
    } else {
      toast.error(`Error happened : ${response.data.error}`)
      return response.status
    }
  }
)

export const returnBook = createAsyncThunk('books/returnBook', async (borrowerId: number) => {
  const response = await axios.patch(`${baseURL}/api/v1/books/${borrowerId}`, {
    borrowerId: '',
    borrowDate: '',
    returnDate: new Date(Date.now())
  })
  if (response.status === 200) {
    toast.success('You Returned Book!')
    return response.data
  } else {
    toast.error(`Error happened : ${response.data.error}`)
    return response.status
  }
})
