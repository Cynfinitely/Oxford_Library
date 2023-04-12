import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  fetchBooks,
  deleteBooks,
  getBookById,
  updateBook,
  addBook,
  borrowBook,
  returnBook
} from '../services/book.service'
import { BooksState, Book } from '../../types'

const initialBookState: BooksState = {
  books: [],
  filteredBooks: [],
  book: null,
  isLoading: false,
  error: null
}

export const bookSlice = createSlice({
  name: 'book',
  initialState: initialBookState,
  reducers: {
    getBooks: () => {
      console.log('You are Succ!')
    },
    bookFilter: (state, action) => {
      const filteredBooks = state.books.filter((book) =>
        book.title?.toLowerCase().includes(action.payload.toLowerCase())
      )
      console.log('**Filtered Books', filteredBooks)
      return {
        ...state,
        filteredBooks: action.payload.length > 0 ? filteredBooks : [...state.books]
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
      state.isLoading = false
      state.books = action.payload
      state.filteredBooks = []
    })
    builder.addCase(deleteBooks.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(deleteBooks.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(deleteBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
      state.isLoading = false
      state.books = action.payload
    })
    builder.addCase(getBookById.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getBookById.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(getBookById.fulfilled, (state, action: PayloadAction<Book>) => {
      state.isLoading = false
      state.book = action.payload
    })
    builder.addCase(updateBook.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(updateBook.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(updateBook.fulfilled, (state, action: PayloadAction<Book>) => {
      state.isLoading = false
      state.book = action.payload
    })

    builder.addCase(addBook.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(addBook.rejected, (state, action) => {
      state.isLoading = true
      state.error = action.payload
    })

    builder.addCase(addBook.fulfilled, (state, action: PayloadAction<Book>) => {
      state.isLoading = true
      state.book = action.payload
    })

    builder.addCase(borrowBook.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(borrowBook.rejected, (state, action) => {
      state.isLoading = true
      state.error = action.payload
    })

    builder.addCase(borrowBook.fulfilled, (state, action: PayloadAction<Book>) => {
      state.isLoading = true
      state.book = action.payload
    })

    builder.addCase(returnBook.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(returnBook.rejected, (state, action) => {
      state.isLoading = true
      state.error = action.payload
    })

    builder.addCase(returnBook.fulfilled, (state, action: PayloadAction<Book>) => {
      state.isLoading = true
      state.book = action.payload
    })
  }
})

export const { getBooks, bookFilter } = bookSlice.actions
export default bookSlice.reducer
